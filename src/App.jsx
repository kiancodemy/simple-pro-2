const url = "https://course-api.com/react-tours-project";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Loading from "./Loading";
import Tour from "./Tour";

const App = () => {
  const [isloading, setisloading] = useState(true);
  const [tour, settour] = useState([]);

  const remove = (id) => {
    const filter = tour.filter((a) => {
      return a.id !== id;
    });
    settour(filter);
  };

  const fetchtour = async () => {
    try {
      setisloading(true);
      const change = await axios.get(
        "https://course-api.com/react-tours-project"
      );
      const changedata = change.data;
      settour(changedata);
      console.log(changedata);

      setisloading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchtour();
  }, []);

  if (isloading) {
    return (
      <main>
        <Loading></Loading>
      </main>
    );
  }

  if (tour.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tour left</h2>
          <button
            style={{ marginTop: "2rem" }}
            type="button"
            className="btn"
            onClick={() => {
              fetchtour();
            }}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tour tour={tour} remove={remove} />
    </main>
  );
};
export default App;

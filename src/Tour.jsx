import Tours from "./Tours";
const Tour = ({ tour,remove }) => {
  const change = tour.map((tour) => {
    return <Tours remove={remove} key={tour.id} {...tour} />;
  });
  return (
    <section>
      <div className="title">
        <h2>Our tour</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">{change}</div>
    </section>
  );
};
export default Tour;

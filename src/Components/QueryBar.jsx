import Order from "./Order";
import SortBy from "./SortBy";

const QueryBar = ({ setOrder, setSortBy }) => {
  return (
    <section className="sortBar">
      <SortBy setSortBy={setSortBy}  />
      <Order setOrder={setOrder} setSortBy={setSortBy} />
    </section>
  );
};

export default QueryBar;

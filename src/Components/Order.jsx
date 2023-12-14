import { useState } from "react";

const Order = ({ setOrder }) => {
  const [ascClicked, setAscClicked] = useState(null);
  const [descClicked, setdescClicked] = useState(null);
  return (
    <section id="order">
      <button
        id={descClicked}
        onClick={() => {
          setOrder("DESC");
          setAscClicked(null);
          setdescClicked("clicked");
        }}
      >
        Desc
      </button>
      <button
        id={ascClicked}
        onClick={() => {
          setOrder("ASC");
          setAscClicked("clicked");
          setdescClicked(null);
        }}
      >
        Asc
      </button>
    </section>
  );
};

export default Order;

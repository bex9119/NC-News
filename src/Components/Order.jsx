const Order = ({ setOrder }) => {
    
    return (
      <section>
        <button
          onClick={() => {
            setOrder("DESC");
          }}
        >
          Desc
        </button>
        <button
          onClick={() => {
            setOrder("ASC");
          }}
        >
          Asc
        </button>
      </section>
    );
}

export default Order
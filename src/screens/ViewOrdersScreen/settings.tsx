import get from "lodash/get";

export const getColumns = () => [
  {
    Header: "Order ID",
    accessor: (data) => {
      const id = get(data, "id");
      return <p style={{ textAlign: "center", margin: 0 }}>{id}</p>;
    },
  },
  {
    Header: "Total Amount",
    accessor: (data) => {
      const amount = get(data, "totalPrice", 0);
      return (
        <p style={{ textAlign: "center", margin: 0 }}>
          MYR {parseFloat(amount.toString()).toFixed(2)}
        </p>
      );
    },
  },
];

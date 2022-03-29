import dayjs from "dayjs";
import get from "lodash/get";

export const getColumns = () => [
  {
    Header: "Ref No.",
    accessor: (data) => {
      const id = get(data, "referenceNumber");
      return <p style={{ textAlign: "center", margin: 0 }}>{id}</p>;
    },
  },
  {
    Header: "Placed At",
    accessor: (data) => {
      const date = get(data, "createdAt");
      return (
        <p style={{ textAlign: "center", margin: 0 }}>
          {dayjs(date).format("DD MMM YYYY")}
        </p>
      );
    },
  },
  {
    Header: "Amount",
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

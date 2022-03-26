import { useState, useMemo } from "react";
import { useTable } from "react-table";
import PageTitle from "../../components/PageTitle";
import { useGetPaginatedOrdersQuery } from "../../graphql";
import { getColumns } from "./settings";
import { Wrapper } from "./styles";

const ViewOrdersScreen = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filterOptions = { page: currentPage, limit: 10 };

  const { data } = useGetPaginatedOrdersQuery({
    variables: {
      options: filterOptions,
    },
  });

  const columns = useMemo(() => getColumns(), []);
  const orders = data?.getPaginatedOrders;
  const pages = orders?.pages ?? 1;
  const items = orders?.items ?? [];

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: items });

  return (
    <Wrapper>
      <PageTitle title="All Orders" />

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default ViewOrdersScreen;

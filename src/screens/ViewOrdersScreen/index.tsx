import { useState, useMemo, useEffect } from "react";
import { useTable } from "react-table";
import PageTitle from "../../components/PageTitle";
import Pagination from "../../components/Pagination";
import { useGetPaginatedOrdersQuery } from "../../graphql";
import { getColumns } from "./settings";
import { Wrapper } from "./styles";

const ViewOrdersScreen = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentSize, setCurrentSize] = useState<number>(15);

  const { data, refetch } = useGetPaginatedOrdersQuery({
    variables: {
      options: {
        page: currentPage,
        limit: currentSize,
      },
    },
  });

  useEffect(() => {
    refetch({
      options: {
        page: currentPage,
        limit: currentSize,
      },
    });
  }, [currentPage, currentSize]);

  const columns = useMemo(() => getColumns(), []);
  const orders = data?.getPaginatedOrders;
  const pages = orders?.pages ?? 1;
  const items = orders?.items ?? [];
  const noPrevPage = currentPage === 1;
  const noNextPage = currentPage === pages;

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

      <Pagination
        disabledNext={noNextPage}
        disabledPrev={noPrevPage}
        onClickNext={() => setCurrentPage(currentPage + 1)}
        onClickPrev={() => setCurrentPage(currentPage - 1)}
      />
    </Wrapper>
  );
};

export default ViewOrdersScreen;

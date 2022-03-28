import { useState, useMemo, useEffect } from "react";
import Select from "react-select";
import { useTable } from "react-table";
import Button from "../../components/Button";
import PageTitle from "../../components/PageTitle";
import Pagination from "../../components/Pagination";
import { useGetPaginatedOrdersQuery } from "../../graphql";
import { getColumns } from "./settings";
import { Wrapper } from "./styles";

const ViewOrdersScreen = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentSize, setCurrentSize] = useState<number>(10);
  const [filterParams, setFilterParams] = useState({});

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

  const handleFilter = (inFilter) => {
    refetch({
      options: {
        page: currentPage,
        limit: currentSize,
      },
      filter: inFilter,
    });
  };

  const sizeOptions = [
    { value: 10, label: "Show 10" },
    { value: 25, label: "Show 25" },
    { value: 50, label: "Show 50" },
  ];

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

      <div style={{ marginTop: "1em" }}>
        <Select
          options={sizeOptions}
          classNamePrefix="react-select"
          value={{ label: `Show ${currentSize}`, value: currentSize }}
          onChange={(e) => setCurrentSize(e?.value ?? 10)}
        />
      </div>

      <div className="filter">
        <div>
          <label htmlFor="orderId">Order ID: </label>
          <input
            type="text"
            id="id"
            name="id"
            placeholder="Order ID"
            onChange={(e) => setFilterParams({ id: Number(e.target.value) })}
          />
        </div>

        <Button
          onClick={() => handleFilter(filterParams)}
          className="filter-btn"
        >
          Submit
        </Button>
      </div>

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

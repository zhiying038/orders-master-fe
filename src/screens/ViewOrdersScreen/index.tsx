import { useState, useMemo, useEffect } from "react";
import Select from "react-select";
import { useTable } from "react-table";
import Button from "../../components/Button";
import Pagination from "../../components/Pagination";
import { FilterOrderInput, useGetPaginatedOrdersQuery } from "../../graphql";
import { getColumns } from "./settings";
import { Wrapper } from "./styles";

const ViewOrdersScreen = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentSize, setCurrentSize] = useState<number>(10);
  const [filterParams, setFilterParams] = useState<FilterOrderInput>({});

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handleReset = () => {
    setFilterParams({});
    handleFilter({});
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
      <div className="mt-3">
        <Select
          options={sizeOptions}
          classNamePrefix="react-select"
          value={{ label: `Show ${currentSize}`, value: currentSize }}
          onChange={(e) => setCurrentSize(e?.value ?? 10)}
        />
      </div>

      <div className="mt-3 flex flex-col">
        <div>
          <label htmlFor="orderId" className="mr-2">
            Ref No:{" "}
          </label>
          <input
            type="text"
            id="referenceNumber"
            name="referenceNumber"
            placeholder="Ref No."
            className="border-2 p-2"
            value={filterParams?.referenceNumber ?? ""}
            onChange={(e) =>
              setFilterParams({ referenceNumber: e.target.value })
            }
          />
        </div>

        <div className="flex flex-row justify-end mt-3">
          <Button
            onClick={handleReset}
            size="small"
            buttonClassName="mr-2 bg-gray-200"
          >
            Reset
          </Button>
          <Button onClick={() => handleFilter(filterParams)} size="small">
            Submit
          </Button>
        </div>
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
        className="mt-4"
        disabledNext={noNextPage}
        disabledPrev={noPrevPage}
        onClickNext={() => setCurrentPage(currentPage + 1)}
        onClickPrev={() => setCurrentPage(currentPage - 1)}
      />
    </Wrapper>
  );
};

export default ViewOrdersScreen;

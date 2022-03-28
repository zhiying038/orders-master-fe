import styled from "styled-components";

export const Wrapper = styled.div`
  table {
    width: 100%;
    margin-top: 1em;
    position: relative;
  }

  table td,
  table th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  table tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  table tr:hover {
    background-color: #ddd;
  }

  table th,
  tfoot td {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #ffe400;
  }

  .pagination {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1em;
    gap: 5px;
  }
`;

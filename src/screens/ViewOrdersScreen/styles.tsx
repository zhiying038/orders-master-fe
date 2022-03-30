import styled from "styled-components";

export const Wrapper = styled.div`
  .react-select__control {
    min-width: 0px;

    &.react-select__control--is-focused {
      border-color: #facc15;
      box-shadow: 0 0 0 1px #facc15;
    }
  }

  .react-select__menu {
    min-width: 0px;

    .react-select__menu-list {
      .react-select__option {
        background-color: transparent;
      }

      .react-select__option--is-selected {
        background-color: #facc15;
      }
    }
  }

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
    background-color: #facc15;
  }
`;

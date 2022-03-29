import styled from "styled-components";

export const Wrapper = styled.div`
  .item-image {
    width: 72px;
    height: 72px;
    min-width: 80px;
  }

  .react-datepicker {
    .react-datepicker__month-container {
      .react-datepicker__month {
        .react-datepicker__week {
          .react-datepicker__day--selected {
            background-color: #facc15;
          }
        }
      }
    }
  }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  .menu-item {
    display: flex;
    align-items: center;

    .item-image {
      width: 72px;
      height: 72px;
      min-width: 80px;
    }

    .item-description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 5px;
      flex: 1 1 auto;

      .item-name {
        font-weight: bold;
      }

      .item-price {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      .quantity {
        .value {
          margin: auto 0.5em;
        }

        .icon {
          cursor: pointer;
          color: #808080;
        }
      }
    }
  }
`;

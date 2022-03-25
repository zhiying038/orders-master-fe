import styled from "styled-components";

export const Wrapper = styled.div`
  .layout-content {
    min-height: 100vh;
    overflow-x: hidden;
  }

  .flex-vertical-center {
    display: flex;
    flex-direction: column;
    align-items: center;

    &.left {
      align-items: flex-start;
    }

    &.right {
      align-items: flex-end;
    }
  }

  @media only screen and (min-width: 770px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 414px;
  }
`;

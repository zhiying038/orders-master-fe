import styled from "styled-components";

export const Wrapper = styled.div`
  .layout-content {
    min-height: 100vh;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    overflow-x: hidden;
  }

  .flex-vertical-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.left {
      align-items: flex-start;
    }

    &.right {
      align-items: flex-end;
    }
  }
`;

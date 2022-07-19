import styled from "styled-components";

const StyledAll = styled.div`
  background-color: rgb(32, 33, 37);
  min-height: 100vh;
  padding: 20px 0;

  > div:not(.sc-jSMfEi) {
    border-top: 1px solid rgb(139, 155, 170);
    border-bottom: 1px solid rgb(139, 155, 170);
    padding: 10px;
    margin-top: -2px;
    display: flex;
    flex-direction: column;
    grid-gap: 10px;

    div {
      padding: 10px;
      display: flex;
      flex-direction: column;
      word-wrap: break-word;

      p:first-child {
        font-size: 0.8rem;
        color: rgb(139, 155, 170);
      }
      a {
        font-size: 1.2rem;
        color: lightblue;
        text-decoration: none;
        margin: 5px 0;

        &:hover {
          text-decoration: underline;
        }
      }
      p:last-child {
        font-size: 1rem;
        color: grey;
      }
    }
  }
`;
export default StyledAll;

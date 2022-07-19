import styled from "styled-components";

const StyledNews = styled.div`
  padding: 20px 0;
  min-height: 100vh;
  background-color: rgb(32, 33, 37);

  > div:not(.sc-jSMfEi) {
    border-top: 1px solid rgb(139, 155, 170);
    border-bottom: 1px solid rgb(139, 155, 170);
    padding: 10px;
    margin-top: -2px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 10px;

    div {
      padding: 10px;
      word-wrap: break-word;
      display: flex;
      flex-direction: column-reverse;

      a {
        text-decoration: none;
        color: grey;
        font-size: 0.9rem;
        font-weight: 500;

        &:first-child {
          font-size: 1.2rem;
          color: lightblue;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

export default StyledNews;

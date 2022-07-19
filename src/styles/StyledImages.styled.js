import styled from "styled-components";

const StyledImages = styled.div`
  padding: 20px 0;
  min-height: 100vh;
  background-color: rgb(32, 33, 37);

  > div {
    border-top: 1px solid rgb(139, 155, 170);
    border-bottom: 1px solid rgb(139, 155, 170);
    padding: 20px 10px;
    margin-top: -2px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 15px;
    grid-auto-rows: 320px;

    a {
      word-wrap: break-word;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      text-decoration: none;
      background-color: rgba(139, 155, 170, 0.05);
      color: lightblue;

      &:hover {
        text-decoration: underline;
      }

      img {
        object-fit: contain;
        display: block;
        // width: 100%;
        height: 75%;
        // flex: 1;
      }

      p {
        text-align: center;
        height: 20%;
        display: grid;
        place-content: center;
        margin-top: 5%;
      }
    }
  }
`;

export default StyledImages;

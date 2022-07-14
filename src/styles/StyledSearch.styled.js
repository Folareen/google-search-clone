import styled from "styled-components";

export const StyledSearch = styled.div`
  background-color: rgb(32, 33, 37);
  height: 100vh;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  nav {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin: 10px auto;

    button {
      outline: none;
      background: none;
      color: #fff;
      border: none;
      padding: 10px;
      font-size: 16px;
      font-family: arial;
    }

    div {
      width: 30%;
      max-width: 100px;
      display: flex;
      justify-content: space-between;

      &:last-child {
        button:last-child {
          border: 1px solid lightgray;
          border-radius: 50%;
        }
      }
    }
  }

  main {
    img {
      width: 80%;
      max-wdith: 300px;
      height: 100px;
      display: block;
      margin: 0 auto;
      object-fit: contain;
      margin-bottom: 40px;
    }
  }

  p {
    text-align: center;
    color: rgb(139, 155, 170);
    border-top: 1px solid rgb(139, 155, 170);
    padding: 10px;
  }
`;

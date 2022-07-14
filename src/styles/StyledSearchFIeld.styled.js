import styled from "styled-components";

const StyledSearchField = styled.form`
  div:first-child {
    background-color: rgb(32, 33, 37);
    border: 1px solid red;
    width: 90%;
    max-width: 600px;
    margin: 0 auto 50px auto;
    padding: 10px 15px;
    border-radius: 25px;
    display: flex;
    height: max-content;
    align-items: center;
    border: 2px solid rgb(48, 49, 53);

    svg,
    input {
      background: transparent;
      color: rgb(255, 255, 255);
      border: none;
    }

    input {
      flex: 1;
      padding: 5px;
      outline: none;
    }
  }
`;

export default StyledSearchField;

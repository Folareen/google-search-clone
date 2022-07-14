import styled from "styled-components";

const StyledSearchField = styled.form`
  img {
    width: 80%;
    max-width: 300px;
    height: ${(props) => (props.big ? "100px" : "50px")};
    display: block;
    margin: 0 auto;
    object-fit: contain;
    margin-bottom: ${(props) => (props.big ? "40px" : "20px")};
  }
  div:first-of-type {
    background-color: rgb(32, 33, 37);
    border: 1px solid red;
    width: 90%;
    max-width: 600px;
    margin: 0 auto ${(props) => (props.big ? "30px" : "10px")} auto;
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

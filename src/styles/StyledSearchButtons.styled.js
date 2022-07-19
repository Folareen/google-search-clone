import styled from "styled-components";

const StyledSearchButtons = styled.div`
  display: flex;
  width: 50%;
  max-width: 350px;
  min-width: 250px;

  justify-content: space-between;
  margin: 0 auto;

  button,
  a {
    background-color: rgb(48, 49, 53);
    color: rgb(206, 213, 229);
    border: none;
    text-decoration: none;
    outline: none;
    padding: 10px;
    font-size: 14px;
    border-radius: 5px;
  }
`;

export default StyledSearchButtons;

import styled from "styled-components";

const StyledSearchNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  a {
    text-decoration: none;
    color: rgb(123, 124, 129);
    flex: 1;
    text-align: center;
    padding: 5px;

    &.active {
      border-bottom: 3px solid rgb(141, 180, 239);
      padding: 10px;
    }
  }
`;

export default StyledSearchNav;

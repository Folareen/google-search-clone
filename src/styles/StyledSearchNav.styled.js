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
    padding: 5px;
    flex: 1;
    text-align: center;

    &.active {
      border-bottom: 3px solid rgb(141, 180, 239);
    }
  }
`;

export default StyledSearchNav;

import styled from "styled-components";

const StyledVideos = styled.div`
  padding: 20px 0;
  min-height: 100vh;
  background-color: rgb(32, 33, 37);

  > div {
    border-top: 1px solid rgb(139, 155, 170);
    border-bottom: 1px solid rgb(139, 155, 170);
    padding: 20px 10px;
    margin-top: -2px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    grid-gap: 20px;
  }
`;

export default StyledVideos;

import styled from "styled-components";

const StyledHeader = styled.header`
 span {
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  border-radius: 2rem 0 2rem 0;
  background-color: ${({ theme }) => theme.black};
 }

 nav {
  height: 50px;
  color: ${({ theme }) => theme.black};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.white};
  padding: 0;
  margin: 0;
  box-shadow: 3px 5px 10px 3px #000000;
 }

 ul {
  padding: 0 1.5rem;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  height: 100%;
 }
`;

export default StyledHeader;

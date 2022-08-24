import styled from "styled-components";

const StyledFooter = styled.footer`
 margin-bottom: 2rem;
 color: ${({ theme }) => theme.black};
 display: flex;
 flex-direction: column;

 div {
  background-color: ${({ theme }) => theme.primary};
  height: 3px;
  width: 5rem;
  margin-bottom: 1.5rem;
 }

 span:first-of-type {
  margin-bottom: 1.5rem;
 }

 span:not(:first-of-type) {
  margin: 0.15rem 0;

  a {
   font-weight: 700;
   margin-left: 0.25rem;
  }
 }
`;

export default StyledFooter;

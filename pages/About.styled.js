import styled from "styled-components";

const StyledAbout = styled.div`
 h2,
 ul,
 .about__education {
  color: ${({ theme }) => theme.black};
 }

 h2:nth-of-type(2) {
  margin-top: 2.5rem;
 }

 .list {
  list-style: inside;
  line-height: 1.4rem;
 }

 ul:not(:last-of-type) {
  margin-bottom: 2.5rem;
 }

 .about__education {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;

  span:first-of-type,
  span:last-of-type {
   font-size: 0.85rem;
   font-weight: 700;
  }

  span:first-of-type,
  span:nth-of-type(2) {
   text-transform: uppercase;
  }

  span:nth-of-type(2) {
   font-size: 1.05rem;
  }
 }
`;

export default StyledAbout;

import Link from "next/link";
import StyledHeader from "./Header.styled";

export default function Header() {
 return (
  <StyledHeader>
   <span>Toma</span>
   <nav>
    <ul>
     <li>
      <Link href="about">
       <a>About</a>
      </Link>
     </li>

     <li>
      <Link href="works">
       <a>Works</a>
      </Link>
     </li>

     <li>
      <Link href="contact">
       <a>Contact</a>
      </Link>
     </li>
    </ul>
   </nav>
  </StyledHeader>
 );
}

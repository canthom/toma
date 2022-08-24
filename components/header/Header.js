import Link from "next/link";
import StyledHeader from "./Header.styled";

export default function Header() {
 return (
  <StyledHeader className="container">
   <span>
    <Link href="/">
     <a>toma</a>
    </Link>
   </span>
   <nav>
    <ul>
     <li>
      <Link href="/about">
       <a>about</a>
      </Link>
     </li>

     <li>
      <Link href="works">
       <a>works</a>
      </Link>
     </li>

     <li>
      <Link href="contact">
       <a>contact</a>
      </Link>
     </li>
    </ul>
   </nav>
  </StyledHeader>
 );
}

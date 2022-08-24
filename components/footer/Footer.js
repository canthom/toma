import StyledFooter from "./Footer.styled";
import Link from "next/link";

export default function Footer() {
 return (
  <StyledFooter>
   <div />
   <span>Here how to reach me</span>

   <span>Email: can.thomas@icloud.com</span>
   <span>
    LinkedIn:{" "}
    <Link href="https://www.linkedin.com/in/canthom/">
     <a>canthomas</a>
    </Link>
   </span>

   <span>
    GitHub:{" "}
    <Link href="https://github.com/canthom">
     <a>canthom</a>
    </Link>
   </span>

   <span>
    Twitter:{" "}
    <Link href="https://twitter.com/TomaDotDev">
     <a>TomaDotDev</a>
    </Link>
   </span>
  </StyledFooter>
 );
}

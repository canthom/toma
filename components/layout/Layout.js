import Head from "next/head";
import Header from "../header/Header";
import StyledLayout from "./Layout.styled";

export default function Layout({ title, keywords, description, children }) {
 return (
  <StyledLayout>
   <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
   </Head>

   <Header />
   <div className="container">{children}</div>
  </StyledLayout>
 );
}

Layout.defaultProps = {
 title: "Toma | Web Design",
 description: "Web design",
 keywords: "dev, web",
};

import StyledAbout from "./About.styled";
import Layout from "../components/layout/Layout";

export default function about() {
 return (
  <StyledAbout>
   <Layout>
    {" "}
    <h2>Education</h2>
    <div className="about__education">
     <span>2022 | Bachelor's-level Diploma</span>
     <span>
      <strong className="strong--primary">React Web Developer</strong>
     </span>
     <span>OpenClassrooms</span>
    </div>
    <div className="about__education">
     <span>2013 | Master's Degree</span>
     <span>
      <strong className="strong--primary">History</strong>
     </span>
     <span>Université de Rouen</span>
    </div>
    <h2>My Soft Skills</h2>
    <ul className="list">
     <li>Creativity & critical thinking</li>
     <li>Good communication skill</li>
     <li>Open-minded & curious</li>
     <li>Persistent & patient</li>
    </ul>
    <h2>My Hard Skills</h2>
    <ul className="list">
     <li>HTML & Semantic Tags</li>
     <li>CSS, Sass, Styled Components</li>
     <li>JavaScript & TypeScript</li>
     <li>React, Redux & Next.js</li>
     <li>Git & GitHub</li>
    </ul>
    <h2>Other things about me</h2>
    <ul className="list">
     <li>I'm a minimalist</li>
     <li>I make videos on YouTube</li>
     <li>I'm a card gamer lover</li>
     <li>I always enjoy a nice talk</li>
    </ul>
    s
   </Layout>
  </StyledAbout>
 );
}

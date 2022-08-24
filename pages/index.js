import Layout from "../components/layout/Layout";

export default function HomePage() {
 return (
  <Layout>
   <h1>
    <span>Hello.</span>
    <span>
     I'm <strong className="strong--primary">Thomas Can</strong>.
    </span>
   </h1>
   <p>
    I'm a <strong className="strong--primary">React developer</strong> with{" "}
    <strong>a love for UX/UI Design</strong> and{" "}
    <strong>good web practices</strong>. As I changed my career to become a
    developer, I learned to <strong>adapt</strong> to any technology. Through my
    past experiences, I have learned to develop{" "}
    <strong>good interpersonal skills</strong>, an{" "}
    <strong>appreciation for teamwork</strong>, but also an{" "}
    <strong>ability to work independently</strong>.
   </p>
   <p>
    I'm <strong className="strong--primary">currently</strong>
    <strong> looking for new opportunities</strong>. I live in France, and I can
    work from home, but also in Normandy, Eure-et-Loir and Paris.
   </p>

   <h2>My Soft Skills</h2>
   <ul>
    <li>Creativity & critical thinking</li>
    <li>Good communication skill</li>
    <li>Open-minded & curious</li>
    <li>Persistent & patient</li>
   </ul>

   <h2>My Hard Skills</h2>
   <ul>
    <li>HTML & Semantic Tags</li>
    <li>CSS, Sass, Styled Components</li>
    <li>JavaScript & TypeScript</li>
    <li>React, Redux & Next.js</li>
    <li>Git & GitHub</li>
   </ul>

   <h2>Other things about me</h2>
   <ul>
    <li>I'm a minimalist</li>
    <li>I make videos on YouTube</li>
    <li>I'm a card gamer lover</li>
    <li>I always enjoy a nice talk</li>
   </ul>
  </Layout>
 );
}

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
  </Layout>
 );
}

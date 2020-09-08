import Nav from "../components/nav";
import Head from "../components/head";

export default function IndexPage() {
  return (
    <>
      <Head title="Services" />
      <div>
        <Nav />
        <div className="py-20">
          <h1>Next.js + Tailwind CSS</h1>
        </div>
      </div>
    </>
  );
}

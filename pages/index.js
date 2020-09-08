import Nav from "../components/nav";
import GoogleFonts from "next-google-fonts";

export default function IndexPage() {
  return (
    <>
      <div>
        <Nav />
        <div className="py-20">
          <h1 style={{ fontFamily: "Spinnaker" }} className="">
            Next.js + Tailwind CSS
          </h1>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import FindRide from "./components/FindRide";

export default function Home() {
  return (
    <section className="min-h-[300px] flex align-center bg-gradient-to-b from-[#00382f] to-[#02050e] text-white p-8">
      <div className="container mt-10  text-center">
        <h1
          className="text-7xl font-bold text-shadow-2xs mb-10 py-10"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          Book your <br /> comfortable & hasle free rides
        </h1>

        <FindRide/>
      </div>
    </section>
  );
}

import Image from "next/image";
import HomeHeaders from "../components/HomeHeaders";
import HomeSearch from "../components/HomeSearch";

export default function Home() {
  return (
    <>
      <HomeHeaders />
      <div className="flex flex-col items-center mt-28">
        <Image
          width={500}
          height={200}
          src="/123.png"
          alt="WebPulse"
          priority
        />
        <HomeSearch />
      </div>
    </>
  );
}

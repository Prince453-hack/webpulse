import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

export default function HomeHeaders() {
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex space-x-4 items-center">
        <Link className="hover:underline" href="/">
          Gmail
        </Link>
        <Link className="hover:underline" href="/">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
        <button className="bg-blue-500 px-6 py-2 text-white font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
          Sign In
        </button>
      </div>
    </header>
  );
}

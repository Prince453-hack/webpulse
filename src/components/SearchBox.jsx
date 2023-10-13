"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get("searchTerm");
  const [input, setInput] = useState(searchTerm || "");

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }

  return (
    <form
      className="flex border border-gray-200 rounded-full shadow-lg px-6 py-2 ml-10 mr-5 flex-grow max-w-3xl items-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="w-full focus:outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for Everything..."
      />
      <RxCross2
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
        onClick={() => setInput("")}
      />
      <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
      <AiOutlineSearch
        className="text-2xl hidden sm:inline-flex cursor-pointer text-blue-500"
        onClick={handleSubmit}
      />
    </form>
  );
}

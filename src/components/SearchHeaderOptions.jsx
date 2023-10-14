"use client";

import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchHeaderOptions() {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  function selectTab(tab) {
    router.push(
      `/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`
    );
  }

  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start text-gray-700 text-sm lg:pl-56">
      <div
        onClick={() => selectTab("All")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathName === "/search/web" && "!border-blue-600 !text-blue-600"
        }`}
      >
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>

      <div
        onClick={() => selectTab("Images")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathName === "/search/image" && "!border-blue-600 !text-blue-600"
        }`}
      >
        <AiOutlineCamera className="text-md" />
        <p>Image</p>
      </div>
    </div>
  );
}

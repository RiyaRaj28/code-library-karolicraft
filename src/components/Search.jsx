import React, { useEffect } from "react";
import { useState } from "react";
import SnippetCard from "./SnippetCard";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
function Search() {
  const [data, setData] = useState([]);
  const [language, setLanguage] = useState("Javascript");
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/snippet/searchSnippet?searchQuery=${inputValue}`
        );
        console.log(response, "hhh");
        if (response) {
          setData(response.data.snippets);
        }
      } catch (error) {
        setData([]);
        console.log(error);
      }
    };
    fetchData();
  }, [inputValue]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/snippet/getsnippetsbylanguage?language=${language}`
        );
        console.log(response, "hhh");
        if (response) {
          setData(response.data.snippets);
        }
      } catch (error) {
        console.log(error);
        setData([]);
      }
    };
    fetchData();
  }, [language]);

  const lang = [
    "Javascript",
    " React.js",
    "Node.js",
    "Cpp",
    "Java",
    "Python",
    "Go",
    "Typescript",
  ];
  return (
    <div className="flex px-5 py-3 flex-col w-[95%] min-h-full max-h-full overflow-auto">
      <div className="flex justify-between">
        <select
          className="border border-black rounded-md px-2 py-1"
          name="language"
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          {lang.map((i, index) => (
            <option selected={i === "Javascript"} key={index}>
              {i}
            </option>
          ))}
        </select>
        {/* <div className='flex justify-center items-center gap-2 rounded-md border border-black pl-2 pr-2'>
            <FaSearch className='text-sm' />
            <input className="p-2 text-sm focus:outline-none" type="text" placeholder="Search all"></input>
          </div> */}

        <div className="flex justify-center items-center gap-2 border border-black pl-2 rounded-md pr-2">
          <FaSearch className="text-sm" />
          <input
            className=" focus:outline-none p-2"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Search by Name"
          ></input>
        </div>
      </div>
      <div className="flex w-full full max-h-full overflow-auto flex-wrap gap-4 px-4 md:px-6 py-8">
        {data?.length >= 1 ? (
          <>
            {data?.map((item, index) => (
              <>
                <SnippetCard item={item} />
              </>
            ))}
          </>
        ) : (
          <h1 className="p-10 text-2xl text-red-500">No Result Found</h1>
        )}
      </div>
    </div>
  );
}

export default Search;

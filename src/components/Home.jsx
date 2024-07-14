import { Link } from "react-router-dom";
import "../styles/Home.css";
import SnippetCard from "./SnippetCard";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/snippet/allsnippets`
        );
        console.log(response, "hhh");
        if (response) {
          const featuredSnippet = response.data.filter(
            (item) => item.featured === true
          );
          setData(featuredSnippet);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex h-full  ">
      <div className="flex h-full flex-col">
        <p className="py-3 pl-4  font-bold text-2xl shadow-md box-border flex justify-between pr-10">
          All Snippets
        </p>

        <div className="flex w-full full max-h-full overflow-auto flex-wrap gap-4 px-4 md:px-6 py-8">
          {data?.map((item, index) => (
            <>
              <SnippetCard item={item} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

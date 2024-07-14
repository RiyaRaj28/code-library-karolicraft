import React from "react";
import CodeDisplay from "./CodeDisplay";
import { useLocation } from "react-router-dom";
function Snippet() {
  const location = useLocation();
  const item = location.state?.item;
  return (
    <div className="flex flex-col  h-[90%] overflow-auto w-[95%] m-5">
      <div className="py-3 pl-4  font-bold text-2xl shadow-md box-border">
        {item?.title}
      </div>
      <div className="flex w-full flex-col justify-center gap-5">
        <div className=" w-full">
          <img
            alt="Snippet Image"
            className=" bg-cover w-full h-64 aspect-square object-cover"
            src={item.image}
          />
        </div>
        <div className="border w-full row-span-2">
          <CodeDisplay code={item?.code} />
        </div>
        <div className="border w-full h-32 px-5">{item?.description}</div>
      </div>
    </div>
  );
}

export default Snippet;

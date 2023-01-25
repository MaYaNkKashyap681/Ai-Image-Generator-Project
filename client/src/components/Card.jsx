import React from "react";
import { download } from "../assets/index.js";
import { downloadImage } from "../utils/index.js";

const Card = ({ _id, name, photo, prompt }) => {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img
        src={photo}
        className="w-full h-auto object-cover roounded-xl"
        alt={prompt}
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
        <p className="text-white font-bold text-md overflow-x-auto">{prompt}</p>
        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-green-700 flex justify-center  object-cover  items-center text-white text-xs font-bold">
              {name[0]}
            </div>
            <p className="text-white text-xm">{name}</p>
          </div>
          <button type = "button" onClick = {() => downloadImage(_id, photo)}>
            <img src = {download} alt = "download" className="w-6 h-6 object-contain invert"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

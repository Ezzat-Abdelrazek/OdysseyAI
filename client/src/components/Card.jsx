import generateRandomNum from "../utils/generateRandomNum";
import { predefinedColors } from "../assets";
import { useEffect, useState } from "react";

const Card = ({ post }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [colsSpanNum, setColsSpanNum] = useState(0);
  const [colorNum, setColorNum] = useState(0);

  useEffect(() => {
    setColsSpanNum(generateRandomNum(15, 30));
    setColorNum(generateRandomNum(0, predefinedColors.length));
  }, []);

  return (
    <div
      style={{ gridRowEnd: `span ${colsSpanNum}` }}
      className="relative justify-self-stretch overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute left-2 right-2 top-2 z-10 flex ${
          isHovered ? "" : "-translate-y-10 opacity-0"
        } items-center gap-2 rounded-md bg-[rgba(0,0,0,0.5)] p-2 text-sm text-white  transition-all duration-300`}
      >
        <span
          className="flex h-4 w-4 items-center justify-center rounded-full p-5 text-lg font-bold text-slate-800"
          style={{
            backgroundColor: `${predefinedColors[colorNum]}`,
          }}
        >
          {post.name[0].toUpperCase()}
        </span>
        <span>{post.name.toLowerCase()}</span>
      </div>
      <figure className="relative h-full w-full ">
        <img
          src={post.photo}
          alt={post.prompt}
          className="h-full w-full rounded-xl object-cover drop-shadow-lg"
        />
        <figcaption
          className={`absolute  bottom-2 left-2 right-2  rounded-md bg-[rgba(0,0,0,0.5)] px-4 py-2 text-sm text-white  ${
            isHovered ? "" : "translate-y-10 opacity-0"
          } transition-all duration-300 `}
        >
          {post.prompt}
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;

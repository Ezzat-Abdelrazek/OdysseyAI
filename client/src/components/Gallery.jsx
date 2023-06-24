//There this card also which i dont know what to do with

import { Card } from "./index";
//TODO:
//ADJUST Layout and make it grid
//DO Hover over make the prompt appear
//Host it

const Gallery = ({ postsData }) => {
  return (
    <div className="grid auto-rows-[10px] grid-cols-[repeat(auto-fill,minmax(195px,1fr))] justify-items-start gap-2">
      {postsData?.map((post) => {
        return <Card post={post} key={post._id} />;
      })}
      <div
        aria-hidden="true"
        className="hidden md:block"
        style={{
          gridColumnStart: "-3",
          gridColumnEnd: `-1`,
          gridRowStart: "1",
          gridRowEnd: "21",
        }}
      ></div>
    </div>
  );
};

export default Gallery;

import { useEffect, useState } from "react";
import { logo, boyStanding, plus } from "../assets";
import Gallery from "../components/Gallery";
import { Link } from "react-router-dom";

//REMOVE IMAGE WHEN REACH CERTAIN SCROLL AREA

const Home = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      const response = await fetch(
        "https://odyssayai.onrender.com/api/v1/post"
      );
      const data = await response.json();
      const posts = data.data.posts;

      setAllPosts(posts);
    };

    fetchAllPosts();
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-col gap-8 ">
        <div className="flex flex-col gap-6">
          <h1 className="text-[2.625rem]/5 font-bold text-white md:text-5xl/5 lg:text-6xl/8">
            <span className="flex items-center gap-2">
              Create Your
              <img
                src={logo}
                alt="OdysseyAI Logo"
                className="w-9 animate-spin-slow md:w-10 lg:w-14"
              />
            </span>
            <br /> Image{" "}
            <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              With AI
            </span>
          </h1>
          <h2 className="text-xs text-white md:max-w-md md:text-base lg:text-xl">
            Explore and create a compilation of imaginative and visually
            striking visuals produced by DALL-E AI
          </h2>
        </div>
        <article className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            Community Showcase
          </h3>
          <Gallery postsData={allPosts} />
        </article>
      </div>
      <div className="absolute right-0 top-0 hidden max-h-[628px] w-[370px] min-w-[430px] md:block md:min-w-[320px]">
        <img
          src={boyStanding}
          alt="AI Image Generated of a Boy Standing While his back to the photo"
          className="h-full w-full rounded-xl border border-[#5F0B2F] object-cover drop-shadow-lg"
        />
        <Link
          aria-label="Create Image"
          className="absolute -left-12 bottom-20 w-24 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:drop-shadow-md active:translate-y-0 active:scale-90 active:drop-shadow-xl"
          to="/post"
        >
          <img src={plus} alt="plus Sign" />
        </Link>
      </div>
    </div>
  );
};

export default Home;

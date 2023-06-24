import { useState } from "react";
import { preview } from "../assets/index";
import { useNavigate } from "react-router-dom";
import FormField from "../components/FormField";
import Loader from "../components/Loader";
import { surpriseMePrompts } from "../assets/index";
import { girlStanding } from "../assets/index";

const CreatePost = () => {
  const [isImgGenerating, setIsImgGenerating] = useState(false);
  const [isImgLoading, setIsImgLoading] = useState(false);
  const [isSharingPost, setIsSharingPost] = useState(false);

  const [userName, setUserName] = useState("");
  const [userPrompt, setUserPrompt] = useState("");
  const [userGeneratedImgUrl, setUserGeneratedImgUrl] = useState("");

  const navigate = useNavigate();

  const generateImg = async () => {
    try {
      setIsImgGenerating(true);
      setIsImgLoading(true);
      const response = await fetch(
        "https://odyssayai.onrender.com/api/v1/image",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: userPrompt,
          }),
        }
      );
      const { data } = await response.json();
      const imgUrl = data.url;
      setUserGeneratedImgUrl(imgUrl);
    } catch (error) {
      alert("There has been an error please try again");
      setIsImgGenerating(false);
      setIsImgGenerating(false);
    } finally {
      setIsImgGenerating(false);
    }
  };

  const handleGenerateImg = () => {
    generateImg();
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleUserPromptChange = (e) => {
    setUserPrompt(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!userGeneratedImgUrl || isImgLoading)
        throw Error("Please Generate An Image before sharing it.");
      if (!userName)
        throw Error("Hello, stranger! I need your name before we can proceed");
      if (!userPrompt)
        throw Error(
          "This image is a little too boring for me. Can you please spice it up by adding a little bit of description instead of leaving the prompt empty"
        );

      setIsSharingPost(true);

      await fetch("https://odyssayai.onrender.com/api/v1/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          prompt: userPrompt,
          photo: userGeneratedImgUrl,
        }),
      });
      navigate("/");
    } catch (err) {
      alert(err.message);
    } finally {
      setIsSharingPost(false);
    }
  };

  const handleSurpriseMe = () => {
    const randomIndex = Math.trunc(Math.random() * surpriseMePrompts.length);
    setUserPrompt(surpriseMePrompts[randomIndex]);
  };

  return (
    <div className="flex gap-14">
      <div className="flex flex-col gap-8">
        <h1 className=" text-3xl font-bold leading-10 text-white md:text-4xl lg:text-5xl">
          Create An Image And Share It{" "}
          <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            With The Community
          </span>
        </h1>
        <form
          action="#"
          className="flex flex-col gap-8 text-white"
          onSubmit={handleFormSubmit}
        >
          <div className="flex flex-col gap-6">
            <FormField
              labelName="Your Name"
              name="name"
              placeholder="Ezzat Tarek"
              onChange={handleUserNameChange}
              value={userName}
            />
            <FormField
              labelName="Your Prompt"
              name="prompt"
              placeholder="Woodland Concert Performed by a skeleton"
              surpriseMe="true"
              onChange={handleUserPromptChange}
              value={userPrompt}
              handleSurpriseMe={handleSurpriseMe}
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square w-[50%] max-w-[265px] overflow-hidden rounded-lg bg-[#A6A6A6] drop-shadow-lg">
              <img
                src={userGeneratedImgUrl || preview}
                alt={userPrompt || "Image Preview"}
                className="h-full w-full object-cover"
                onLoad={() => setIsImgLoading(false)}
              />
              {(isImgLoading || isImgGenerating) && (
                <>
                  <Loader />
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-[3px]" />
                </>
              )}
            </div>
            <button
              type="button"
              className="w-full max-w-lg rounded-[4px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 py-2 font-bold drop-shadow-md"
              onClick={handleGenerateImg}
            >
              {isImgLoading || isImgGenerating ? "Generating...." : "Generate"}
            </button>
            <p className="text-sm">
              Once you have created the image you want, you can share it with
              the community
            </p>
            <button
              type="submit"
              className="w-full max-w-lg rounded-[4px] bg-[#dddddd] py-2 font-bold text-gray-900 drop-shadow-md"
            >
              {isSharingPost ? "Sharing....." : "Share with the community"}
            </button>
          </div>
        </form>
      </div>
      <div className="relative hidden max-h-[628px] min-w-[430px] md:block md:min-w-[320px]">
        <img
          src={girlStanding}
          alt="AI Image Generated of a Boy Standing While his back to the photo"
          className="h-full w-full rounded-xl border border-[#8B5400] object-cover drop-shadow-lg"
        />
      </div>
    </div>
  );
};

export default CreatePost;

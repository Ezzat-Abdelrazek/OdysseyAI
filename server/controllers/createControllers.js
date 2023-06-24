import axios from "axios";

export const createImg = async (req, res) => {
  const options = {
    method: "POST",
    url: "https://ai-image-generator3.p.rapidapi.com/generate",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": process.env.AI_IMAGE_API_KEY,
      "X-RapidAPI-Host": "ai-image-generator3.p.rapidapi.com",
    },
    data: {
      prompt: req.body.prompt,
      page: 1,
    },
  };

  try {
    const response = await axios.request(options);
    const images = response.data.results.images;

    res.status(200).send({
      status: "success",
      data: {
        url: images[Math.trunc(Math.random() * images.length)],
        results: response.data.results,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error(
      "Apologies for the delay. Our team is working hard to generate your image with care."
    );
  }
};

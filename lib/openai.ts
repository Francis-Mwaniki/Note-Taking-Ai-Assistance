import { Configuration, OpenAIApi } from "openai-edge";
import { createClient } from "pexels";
const client = createClient(process.env.PEXELS_API_KEY!);
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function generateImagePexel(imageDescription: string) {
  try {
    // Search for images based on the description and limit the result to one image
    const searchResult = await client.photos.search({
      query: imageDescription,
      per_page: 1,
      size: "small",
    });

    if (searchResult) {
      // Extract the URL of the first image in the search results
      const imageUrl = searchResult?.photos[0]?.src.medium;
      console.log(`----- Image URL: ${imageUrl}------`);
      return imageUrl;
    } else {
      const imageUrl = "https://source.unsplash.com/random/256x256";
      return imageUrl;
    }
  } catch (error) {
    console.error("Error fetching image:", error);
    throw error;
  }
}


export async function generateImagePrompt(name: string) {
  await generateImagePexel(name);
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are an creative and helpful AI assistance capable of generating interesting thumbnail descriptions for my notes. Your output will be fed into the DALLE API to generate a thumbnail. The description should be minimalistic and flat styled",
        },
        {
          role: "user",
          content: `Please generate a thumbnail description for my notebook titles ${name}`,
        },
      ],
    });
    /* search one image from pexel */
    const data = await response.json();
    const image_description = data.choices[0].message.content;
    return image_description as string;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function generateImage(image_description: string) {
  try {
    const response = await openai.createImage({
      prompt: image_description,
      n: 1,
      size: "256x256",
    });
    const data = await response.json();
    console.log(data);
    const image_url = data?.data[0].url;
    if(!image_url){
      alert('Failed to generate image')
        throw new Error('Failed to generate image')
        }
    return image_url as string;
  } catch (error) {
    console.error(error);
  }
}
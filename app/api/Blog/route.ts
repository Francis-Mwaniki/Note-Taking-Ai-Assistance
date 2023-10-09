// pages/api/generateReport.js
import { OpenAIApi, Configuration } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { NextResponse } from "next/server";
// /api/completion
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY!,
});
// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

const openai = new OpenAIApi(config);

export async function POST(req: Request) {
 const body = await req.json().then((data) => {
       return data.prompt
 }).catch((err) => {
         return err
   }
   )

let data= await JSON.parse(body);

const title= data['title'];
const description = data['description'];
const tags= data['tags'];





    if(!title || !description || !tags){
         return new NextResponse("Please provide all the required information", { status: 400 })
     }

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `
      You are an AI assistant that helps bloggers to write blog posts. You are given a title, description and tags and you have to write a blog post about it.

        `,
      },
      {
        role: "user",
        content: `
           You are a blogger and you want to write a blog post about ${title} with the following description: ${description} and the following tags: ${tags}.
        `,
      },
    ],
    stream: true,
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}

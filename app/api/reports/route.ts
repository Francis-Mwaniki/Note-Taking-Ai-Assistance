// pages/api/generateReport.js
import { OpenAIApi, Configuration } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { NextResponse } from "next/server";
// /api/completion
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY!,
});

const openai = new OpenAIApi(config);

export async function POST(req: Request) {
 const body = await req.json().then((data) => {
       return data.prompt
 }).catch((err) => {
         return err
   }
   )

let data= await JSON.parse(body);




const companyName = data['companyName'];
const foundingYear = data['foundingYear'];
const description = data['description'];
const internshipTitle = data['internshipTitle'];
const projectTitle = data['projectTitle'];

console.log(foundingYear)
console.log(description);
console.log(internshipTitle);
console.log(projectTitle);

console.log(companyName);


   
   


   

   if(!companyName || !foundingYear || !internshipTitle || !projectTitle || !description){
       return new NextResponse("Please provide all the required information", { status: 400 })
    }

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `
        You are a helpful AI embedded in a report generator app that is used to generate internship reports
        The traits of AI include expert knowledge, helpfulness, cleverness, and articulateness.
        AI is a well-behaved and well-mannered individual.
        AI is always friendly, kind, and inspiring, and he is eager to provide vivid and thoughtful responses to the user.

        `,
      },
      {
        role: "user",
        content: `
        Use the following information to generate an internship report: 
         Company Name: ${companyName}
         Founding Year: ${foundingYear}
         Description: ${description}
         Internship Title: ${internshipTitle}
         Project Title: ${projectTitle}
         Generate a detailed internship report with the following sections #IMPORTANT start with table of contents and then the following sections: 
         1. Introduction
         2. Company Overview
         3. Internship Position
         4. Project Overview
         5. Roles and Responsibilities
         6. Learning and Experiences
         7. Reflections -
         8. Conclusion - please make sure to include all the relevant appendices, assumptions, and references
         9. Appendices - please make sure to include all the relevant appendices, assumptions, and references
         10. References -a list of references used in the report - at least 5 references are required please

         # IMPORTANT: Please not less than 1000 words


       
        `,
      },
    ],
    stream: true,
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}

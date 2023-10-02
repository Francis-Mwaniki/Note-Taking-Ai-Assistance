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




const companyName = data['companyName'];
const yearOfExperience = data['yearOfExperience'];
const description = data['description'];
const jobTitle = data['jobTitle'];
const projectTitle = data['projectTitle'];
const yourName = data['yourName'];
const yourAddress = data['yourAddress'];
const yourState = data['yourState'];
const date = new Date().toLocaleDateString();
const phone= data['phone'];
const companyAddress = data['companyAddress'];


console.log(yearOfExperience)
console.log(description);
console.log(jobTitle);
console.log(projectTitle);
console.log(yourName);
console.log(yourAddress);
console.log(yourState);
console.log(date);
console.log(companyAddress);
console.log(companyName);

   if(!companyName || !yearOfExperience || !jobTitle || !projectTitle || !description){
       return new NextResponse("Please provide all the required information", { status: 400 })
    }

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `
        You are a helpful AI embedded in a report generator app that is used to generate Cover letter for ${yourName}
        The traits of AI include expert knowledge, helpfulness, cleverness, and articulateness.
        AI is a well-behaved and well-mannered individual.
        AI is always friendly, kind, and inspiring, and he is eager to provide vivid and thoughtful responses to the user.

        `,
      },
      {
        role: "user",
        content: `
       Kindly generate a cover letter for ${yourName} who is a ${jobTitle} with ${yearOfExperience} years of experience.
       and ${description}, ${projectTitle} at ${companyName} located at ${companyAddress}.
        My name is ${yourName} and I live at ${yourAddress} ${yourState}.
        My phone number is ${phone}.

        #IMPORTANT: keep it sweet and short
        `,
      },
    ],
    stream: true,
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
/* 
 AND CREATE A DETAILED REPORT ON BELOW TOPICS: 
        
          1: Introduction hint: use the details provided above to create an introduction
           2: Declaration -please assume that you have done the industrial attachment
           3: Acknowledgement -describe the company and the industrial attachment based details provided above
           4: Abstract - use above details to create an abstract
           5: Executive Summary
           6: Introduction - Background
           7: Objectives -objectives of the industrial attachment
           8: Organization profile -please describe in detailed based on details provided above: company profile -physical location, history, mission, vision, values, products and services, organizational structure, departments, staff, predict based on the company name 
           9: Activities - activities carried out during the industrial attachment - predict based on the details provided above
           10:  Results and Discussion - predict based on the details provided above
           11: Conclusion - predict based on the details provided above 
           12: Recommendations - create recommendations based on the details provided above
           13: References -add references based on the details provided above -assume that you have used the company website and more
           14: Appendices - add appendices based on the details provided above
           

           #IMPORTANT: each section should have atleast 1 page



         
*/
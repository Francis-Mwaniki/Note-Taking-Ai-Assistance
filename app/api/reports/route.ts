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
const studentName = data['studentName'];
const schoolName = data['schoolName'];
const campusName = data['campusName'];
const courseName = data['courseName'];
const studentId = data['studentId'];
const supervisorName = data['supervisorName'];
const supervisorEmail = data['supervisorEmail'];
const supervisorPhone = data['supervisorPhone'];
const startDate = data['startDate'];
const endDate = data['endDate'];
const duration = data['duration'];
const reportTitle = data['reportTitle'];
const reportType = data['reportType'];
const reportFormat = data['reportFormat'];


console.log(foundingYear)
console.log(description);
console.log(internshipTitle);
console.log(projectTitle);
console.log(studentName);
console.log(schoolName);
console.log(campusName);
console.log(courseName);
console.log(studentId);
console.log(supervisorName);
console.log(supervisorEmail);
console.log(supervisorPhone);
console.log(startDate);
console.log(endDate);
console.log(duration);
console.log(reportTitle);
console.log(reportType);
console.log(reportFormat);
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
        You are a helpful AI embedded in a report generator app that is used to generate Industrial attachment report
        The traits of AI include expert knowledge, helpfulness, cleverness, and articulateness.
        AI is a well-behaved and well-mannered individual.
        AI is always friendly, kind, and inspiring, and he is eager to provide vivid and thoughtful responses to the user.

        `,
      },
      {
        role: "user",
        content: `
        Use the following information to generate an Industrial attachment report Assume the role of a student who has just completed an industrial attachment at a that company. 
         Company Name: ${companyName}
         Founding Year: ${foundingYear}
         Description: ${description}
         Industrial Attachment Title: ${internshipTitle}
         Project Title: ${projectTitle}
          Student Name: ${studentName}
          School Name: ${schoolName}
          Campus Name: ${campusName}
          Course Name: ${courseName}
          Student ID: ${studentId}
          Supervisor Name: ${supervisorName}
          Supervisor Email: ${supervisorEmail}
          Supervisor Phone: ${supervisorPhone}
          Start Date: ${startDate}
          End Date: ${endDate}
          Duration: ${duration}
          Report Title: ${reportTitle}
          Report Type: ${reportType}
          Report Format: ${reportFormat}
         Generate a detailed INDUSTRIAL ATTACHMENT report with the following  #IMPORTANT start with table of contents AND CREATE A DETAILED REPORT ON BELOW TOPICS: 
        
          1: Introduction hint: use the details provided above to create an introduction
           2: Declaration -please assume that you have done the industrial attachment
           3: Acknowledgement -describe the company and the industrial attachment based details provided above
           4: Abstract - use above details to create an abstract
           5: Executive Summary
           6: Introduction - Background
           7: Objectives -objectives of the industrial attachment
           8: Organization profile -please descibe in detailed based on details provided above: company profile -physical location, history, mission, vision, values, products and services, organizational structure, departments, staff, predict based on the company name 
           9: Activities - activities carried out during the industrial attachment - predict based on the details provided above
           10:  Results and Discussion - predict based on the details provided above
           11: Conclusion - predict based on the details provided above 
           12: Recommendations - create recommendations based on the details provided above
           13: References -add references based on the details provided above -assume that you have used the company website and more
           14: Appendices - add appendices based on the details provided above
           

           #IMPORTANT: each section should have atleast 1 page



         


       
        `,
      },
    ],
    stream: true,
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}

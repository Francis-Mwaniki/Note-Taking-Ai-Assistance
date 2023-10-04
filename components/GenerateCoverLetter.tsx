import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Progress } from "./ui/progress"
import { ChevronDown, ChevronDownCircle, ChevronUp, ChevronUpCircle, Loader2, Sparkles } from "lucide-react"
import { Textarea } from "./ui/textarea"
type Props = {
    onGenerateReport: (data: { companyName: string, companyAddress: string, yourState: string, yearOfExperience: number,description:string,
      jobTitle: string,
      yourName: string,
      yourAddress: string,
      phone: string,
      projectTitle: string,
    }) => void;
}
/* 
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
 */

const GenerateCoverLetter = ({ onGenerateReport }: Props)  => {
  /* 
   jobTitle,
            yourName,
            yourAddress,
            projectTitle,
            studentId,
            supervisorName,
            supervisorEmail,
            phone,
            startDate,
            endDate,
            duration,
            reportTitle,
            reportType,
            reportFormat
  */
   const [isLoading, setIsLoading] = React.useState(false);
   const [progressValue, setprogressValue] = React.useState(10);
        const [companyName, setCompanyName] = React.useState('');
        const [companyAddress, setcompanyAddress] = React.useState('');
        const [yourState, setyourState] = React.useState('');
        const [yearOfExperience, setyearOfExperience] = React.useState('');
        const [description, setDescription] = React.useState('');
        const [jobTitle, setjobTitle] = React.useState('');
        const [yourName, setyourName] = React.useState('');
        const [yourAddress, setyourAddress] = React.useState('');
        const [projectTitle, setprojectTitle] = React.useState('');
        const [phone, setphone] = React.useState('');


        const [isToggled, setIsToggled] = React.useState(false);
        const [isCompanyToggled, setIsCompanyToggled] = React.useState(false);
        const companyToggle = () => setIsCompanyToggled(!isCompanyToggled);


        const toggle = () => setIsToggled(!isToggled);
    
        const generateReport = () => {
          if(!companyName || !companyAddress || !yourState || !yearOfExperience || !description || !jobTitle || !yourName || !yourAddress || !projectTitle || !phone)
          return;
            setIsLoading(true);
onGenerateReport({ companyName, yearOfExperience: Number(yearOfExperience), yourState, companyAddress, description, phone ,jobTitle, yourName, yourAddress, projectTitle,
             });
            
            setprogressValue(100);

            setTimeout(() => {
                setIsLoading(false);
            }
            , 5000);

        };
        

    return (
        <div className="  sm:py-24 py-20  bg-white flex justify-center items-center mx-auto overflow-y-auto  bottom-4">
         <Card className="sm:w-[550px] w-full overflow-auto ">
          <CardHeader>
            <CardTitle>Create 
            <span className="text-blue-700"> Cover Letter</span>
            </CardTitle>
            <CardDescription>
              Fill in the details below to generate a cover letter.
              .</CardDescription>
          </CardHeader>
          <CardContent>
            {!isLoading ? (
              <form>
              <div className="grid w-full items-center gap-2">
             
              <div className="flex justify-between items-center">
                <CardHeader  onClick={ companyToggle} className=" cursor-pointer"> Company details</CardHeader>
              {!isCompanyToggled ? (
                 <ChevronUpCircle
                 size={24}
                 className="ml-auto cursor-pointer transform rotate-180"
                 onClick={ companyToggle}
               />
              ) : (
                <ChevronDownCircle
                  size={24}
                  className="ml-auto cursor-pointer transform rotate-180"
                  onClick={ companyToggle}
                />
              )
              }
              </div>
                 {isCompanyToggled && (
                  <>
                      <div className="flex justify-between items-center flex-col gap-y-4">
                   <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Company name</Label>
                  <Input
                    id="name"
                    placeholder="Company name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="company-address">company address</Label>
                  <Input
                    id="company address"
                    placeholder="company address"
                    value={companyAddress}
                    onChange={(e) => setcompanyAddress(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="state">Your State</Label>
                  <Input
                    id="state"
                    placeholder="state"
                    value={yourState}
                    onChange={(e) => setyourState(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="project-title">Years of experience</Label>
                  <Input
                    id="experinece"
                    placeholder="years of experience"
                    value={yearOfExperience}
                    onChange={(e) => setyearOfExperience(e.target.value)}
                  />
                </div>
                 <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="name"
                    value={yourName}
                    onChange={(e) => setyourName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="job-title">Job Title</Label>
                  <Input
                    id="job-title"
                    placeholder="Job title"
                    value={jobTitle}
                    onChange={(e) => setjobTitle(e.target.value)}
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="your-address">Your address</Label>
                  <Input
                    id="your-address"
                    placeholder="your address"
                    value={yourAddress}
                    onChange={(e) => setyourAddress(e.target.value)}
                  />
                </div>
                 <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="project-title">project Title  </Label>
                  <Input
                    id="project-title"
                    placeholder="project-title"
                    value={projectTitle}
                    onChange={(e) => setprojectTitle(e.target.value)}
                  />
                </div>
                

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="phone"> phone</Label>
                  <Input
                    id="phone"
                    placeholder=" phone"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                  />
                  </div>

               <Textarea
                    id="description"
                    placeholder="Describe your skills example Vue, Nextjs, etc."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                 </div>


                 
                  </>
                 )}              
              </div>
            </form>
            ):(
              /* loading div */
              <div className="flex justify-center items-center">
                <Loader2 size={64} className="animate-spin" />
              </div>
            )}
          </CardContent>
          <CardFooter className="flex  justify-self-center w-full  ">
           
            <Button onClick={generateReport}
            className="w-full"
              disabled={!companyName || !companyAddress || !yourState || !yearOfExperience || !description 
              || !jobTitle || !yourName || !yourAddress || !projectTitle || !phone || isLoading
              }
            >
              <Sparkles size={16} className="mr-2" />
              Ai Generate 
            </Button>
          </CardFooter>
        </Card>   
        </div>
        
  )
}

export default GenerateCoverLetter
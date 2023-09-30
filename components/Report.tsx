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
import { Loader2 } from "lucide-react"
type Props = {
    onGenerateReport: (data: { companyName: string, foundingYear: number, internshipTitle: string, projectTitle: string,description:string }) => void;
}

const InternshipR = ({ onGenerateReport }: Props)  => {
   const [isLoading, setIsLoading] = React.useState(false);
   const [progressValue, setprogressValue] = React.useState(10);
        const [companyName, setCompanyName] = React.useState('');
        const [foundingYear, setFoundingYear] = React.useState('');
        const [internshipTitle, setInternshipTitle] = React.useState('');
        const [projectTitle, setProjectTitle] = React.useState('');
        const [description, setDescription] = React.useState('');
    
        const generateReport = () => {
          if(!companyName || !foundingYear || !internshipTitle || !projectTitle || !description) return;
            setIsLoading(true);
           
         
            onGenerateReport({ companyName, foundingYear: Number(foundingYear), internshipTitle, projectTitle,description });
            
            setprogressValue(100);

            setTimeout(() => {
                setIsLoading(false);
            }
            , 5000);

        };
        

    return (
        <div className=" fixed inset-x-0 top-24 py-32 h-screen bg-white flex justify-center items-center mx-auto overflow-y-auto  bottom-4">
         <Card className="w-[350px] overflow-auto">
          <CardHeader>
            <CardTitle>Create Report</CardTitle>
            <CardDescription>Create internship report.</CardDescription>
          </CardHeader>
          <CardContent>
            {!isLoading ? (
              <form>
              <div className="grid w-full items-center gap-4">
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
                  <Label htmlFor="founding-year">Founding year</Label>
                  <Input
                    id="founding-year"
                    placeholder="Founding year"
                    value={foundingYear}
                    onChange={(e) => setFoundingYear(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="internship-title">Internship title</Label>
                  <Input
                    id="internship-title"
                    placeholder="Internship title"
                    value={internshipTitle}
                    onChange={(e) => setInternshipTitle(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="project-title">Project title</Label>
                  <Input
                    id="project-title"
                    placeholder="Project title"
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
               
              </div>
            </form>
            ):(
              /* loading div */
              <div className="flex justify-center items-center">
                <Loader2 size={64} className="animate-spin" />
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button onClick={generateReport}
              disabled={!companyName || !foundingYear || !internshipTitle || !projectTitle || !description || isLoading}
            >Generate</Button>
          </CardFooter>
        </Card>   
        </div>
        
  )
}

export default InternshipR
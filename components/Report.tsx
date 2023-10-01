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
    onGenerateReport: (data: { companyName: string, foundingYear: number, internshipTitle: string, projectTitle: string,description:string,
      schoolName: string,
      campusName: string,
      courseName: string,
      studentName: string,
      studentId: string,
      supervisorName: string,
      supervisorEmail: string,
      supervisorPhone: string,
      startDate: string,
      endDate: string,
      duration: string,
      reportTitle: string,
      reportType: string,
      reportFormat: string 
    }) => void;
}

const InternshipR = ({ onGenerateReport }: Props)  => {
  /* 
   schoolName,
            campusName,
            courseName,
            studentName,
            studentId,
            supervisorName,
            supervisorEmail,
            supervisorPhone,
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
        const [foundingYear, setFoundingYear] = React.useState('');
        const [internshipTitle, setInternshipTitle] = React.useState('');
        const [projectTitle, setProjectTitle] = React.useState('');
        const [description, setDescription] = React.useState('');
        const [schoolName, setSchoolName] = React.useState('');
        const [campusName, setCampusName] = React.useState('');
        const [courseName, setCourseName] = React.useState('');
        const [studentName, setStudentName] = React.useState('');
        const [studentId, setStudentId] = React.useState('');
        const [supervisorName, setSupervisorName] = React.useState('');
        const [supervisorEmail, setSupervisorEmail] = React.useState('');
        const [supervisorPhone, setSupervisorPhone] = React.useState('');
        const [startDate, setStartDate] = React.useState('');
        const [endDate, setEndDate] = React.useState('');
        const [duration, setDuration] = React.useState('');
        const [reportTitle, setReportTitle] = React.useState('');
        const [reportType, setReportType] = React.useState('');
        const [reportFormat, setReportFormat] = React.useState('');

        const [isToggled, setIsToggled] = React.useState(false);
        const [isCompanyToggled, setIsCompanyToggled] = React.useState(false);
        const companyToggle = () => setIsCompanyToggled(!isCompanyToggled);


        const toggle = () => setIsToggled(!isToggled);
    
        const generateReport = () => {
          if(!companyName || !foundingYear || !internshipTitle || !projectTitle || !description || !schoolName || !campusName || !courseName || !studentName || !studentId || !supervisorName || !supervisorEmail || !supervisorPhone || !startDate || !endDate || !duration || !reportTitle || !reportType || !reportFormat)
          return;
            setIsLoading(true);
            onGenerateReport({ companyName, foundingYear: Number(foundingYear), internshipTitle, projectTitle,description, schoolName, campusName, courseName, studentName, studentId, supervisorName, supervisorEmail, supervisorPhone, startDate, endDate, duration, reportTitle, reportType, reportFormat
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
            <span className="text-blue-700"> Internship Report</span>
            </CardTitle>
            <CardDescription>
              Fill in the details below to generate a report.
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
                  <Label htmlFor="founding-year">Founding year</Label>
                  <Input
                    id="founding-year"
                    placeholder="when was the company founded?"
                    value={foundingYear}
                    onChange={(e) => setFoundingYear(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="internship-title">Internship title</Label>
                  <Input
                    id="internship-title"
                    placeholder="role title"
                    value={internshipTitle}
                    onChange={(e) => setInternshipTitle(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="project-title">Project title</Label>
                  <Input
                    id="project-title"
                    placeholder="Title of the project"
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                  />
                </div>
               <Textarea
                    id="description"
                    placeholder="Describe the company - what does it do, what is its mission, etc."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                 </div>
                  </>
                 )}
               
               


                <div className="flex justify-between items-center">
                <CardHeader  onClick={ toggle} className=" cursor-pointer"> School details</CardHeader>
              {!isToggled ? (
                 <ChevronUpCircle
                 size={24}
                 className="ml-auto cursor-pointer transform rotate-180"
                 onClick={ toggle}
               />
              ) : (
                <ChevronDownCircle
                  size={24}
                  className="ml-auto cursor-pointer transform rotate-180"
                  onClick={ toggle}
                />
              )
              }
               </div>

               {isToggled && (
                <>
                
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="school-name">School name</Label>
                  <Input
                    id="school-name"
                    placeholder="School name"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="campus-name">Campus name</Label>
                  <Input
                    id="campus-name"
                    placeholder="Campus name"
                    value={campusName}
                    onChange={(e) => setCampusName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="course-name">Course name</Label>
                  <Input
                    id="course-name"
                    placeholder="Course name"
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="student-name">Student name</Label>
                  <Input
                    id="student-name"
                    placeholder="Student name"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="student-id">Student ID</Label>
                  <Input
                    id="student-id"
                    placeholder="Student ID"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="supervisor-name">Supervisor name</Label>
                  <Input
                    id="supervisor-name"
                    placeholder="Supervisor name"
                    value={supervisorName}
                    onChange={(e) => setSupervisorName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="supervisor-email">Supervisor email</Label>
                  <Input
                    id="supervisor-email"
                    placeholder="Supervisor email"
                    value={supervisorEmail}
                    onChange={(e) => setSupervisorEmail(e.target.value)}
                  />

                  </div>
                  <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="supervisor-phone">Supervisor phone</Label>
                  <Input
                    id="supervisor-phone"
                    placeholder="Supervisor phone"
                    value={supervisorPhone}
                    onChange={(e) => setSupervisorPhone(e.target.value)}
                  />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="start-date">Start date</Label>
                  <Input
                    id="start-date"
                    placeholder="Start date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="end-date">End date</Label>
                  <Input
                    id="end-date"
                    placeholder="End date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="duration">Duration</Label>
                  <Input
                    id="duration"
                    placeholder="Duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="report-title">Report title</Label>
                  <Input
                    id="report-title"
                    placeholder="Report title"
                    value={reportTitle}
                    onChange={(e) => setReportTitle(e.target.value)}
                  />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="report-type">Report type</Label>
                  <Input
                    id="report-type"
                    placeholder="Report type"
                    value={reportType}
                    onChange={(e) => setReportType(e.target.value)}
                  />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="report-format">Report format</Label>
                  <Input
                    id="report-format"
                    placeholder="Report format"
                    value={reportFormat}
                    onChange={(e) => setReportFormat(e.target.value)}
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
              disabled={!companyName || !foundingYear || !internshipTitle || !projectTitle || !description 
              || !schoolName || !campusName || !courseName || !studentName || !studentId || !supervisorName || !supervisorEmail || !supervisorPhone || !startDate || !endDate || !duration || !reportTitle || !reportType || !reportFormat || isLoading
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

export default InternshipR
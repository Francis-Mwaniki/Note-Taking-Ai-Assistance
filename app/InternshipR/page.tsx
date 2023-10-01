"use client";
import React, { useState } from 'react';
import ReportForm from '@/components/Report';
import { useCompletion, useChat } from "ai/react";
import { Dialog } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Toaster } from "react-hot-toast";
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { EditorContent, useEditor } from "@tiptap/react";
import { Button } from '@/components/ui/button';
import { toast } from 'react-hot-toast';
import { ArrowBigLeft, ArrowLeft, Copy, Save, StopCircle } from 'lucide-react';
import StarterKit from '@tiptap/starter-kit';
import Link from 'next/link';

const ReportPage = () => {
       const [generatedReport, setGeneratedReport] = useState('');
const [editorState, setEditorState] = React.useState(
    `<span>...</span>`
  );

      const editor = useEditor({
    autofocus: true,
    extensions: [StarterKit],
    content: generatedReport,
    onUpdate: ({ editor }) => {
      setGeneratedReport(editor.getHTML());
    },
  });
   

    
    const { complete, completion,stop, isLoading, } = useCompletion({
    api : "/api/reports",
    
   });
 
 
    const lastCompletion = React.useRef("");
    /* console.log(description);
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
console.log(companyName); */


    const handleGenerateReport = async ({ companyName, foundingYear, internshipTitle, projectTitle ,description
        ,schoolName, campusName, courseName, studentName, studentId, supervisorName, supervisorEmail, supervisorPhone, startDate, endDate, duration, reportTitle, reportType, reportFormat
    }: { companyName: string, foundingYear: number, internshipTitle: string, projectTitle: string,description:string 
      schoolName: string, campusName: string, courseName: string, studentName: string, studentId: string, supervisorName: string, supervisorEmail: string, supervisorPhone: string, startDate: string, endDate: string, duration: string, reportTitle: string, reportType: string, reportFormat: string
    }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const report = JSON.stringify({
            companyName,
            foundingYear,
            internshipTitle,
            projectTitle,
            description,
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
            
        })

        await complete(report); 
        }

       

        React.useEffect(() => {
          if (!completion ) return;
          const diff = completion.slice(lastCompletion.current.length);
          lastCompletion.current = completion;
          console.log(completion);
          setGeneratedReport(completion);



        }, [completion]);

    


    
    

 return (
        <div className=' flex justify-center items-center mx-auto p-4 flex-col gap-y-3 bg-white min-h-screen'>
        
            
            {generatedReport && (
                <Dialog
                >
                    <div className='flex flex-col gap-y-3 w-full'>
                   <div className="flex justify-start flex-row items-center gap-x-3  max-w-3xl px-6">
                   <Button
                        className='flex mx-auto btn btn-primary' 
                          onClick={() => {
                            setGeneratedReport('');

                        }
                        }>
                            <ArrowLeft size={24} className='mr-2' />
                            Back
                        </Button>
                   <h1 className="sm:text-5xl text-xl text-center bg-gradient-to-r from-rose-900 via-blue-500 to-pink-600 bg-clip-text font-extrabold text-transparent tracking-tight">
                        Generated Report </h1>
                        {/* back  */}
                       

                   </div>

                        <div className='flex flex-col gap-y-3 sm:w-3/4 mx-auto w-full'>
                           
                             <div className="prose prose-sm  mt-4 text-start flex justify-center items-center mx-auto sm:w-3/4 w-[100%]">
                             <Textarea
                                value={generatedReport}
                                onChange={() => {}}
                                className='w-full'
                                rows={30}
          
                            />
                        </div>
                            {/* stop */}
                           {isLoading && (
                             <Button
                             className='btn btn-primary'
                             onClick={() => {
                                 stop();
                             }}
                         >
                             <StopCircle size={24}  className='mr-2' />
                             Stop
                         </Button>
                           )}
                            <div className='flex gap-x-3'>
                                <Button
                                    className='btn btn-primary'
                                    onClick={() => {
                                        navigator.clipboard.writeText(generatedReport);

                                        setTimeout(() => {
                                            toast.success('Copied to clipboard!');
                                        }
                                        , 100);

                                    }}
                                    
                                >
                                    <Copy size={24} className='mr-2' />
                                    Copy
                                </Button>
                                <Button
                                    className='btn btn-primary'
                                    disabled
                                    onClick={() => {
                                        axios.post('/api/reports', generatedReport);
                                    }}
                                >
                                    <Save size={24} className='mr-2' />
                                    Save
                                </Button>
                                {/* REGENERATE */}
                                <Button
                                    className='btn btn-primary'
                                    onClick={() => {
                                       
                                        complete(generatedReport);
                                    }
                                    }
                                >
                                    <ArrowBigLeft size={24} className='mr-2' />
                                    Regenerate
                                </Button>


                            </div>
                        </div>
                    </div>
                </Dialog>
            
            )}
            {!generatedReport && (
               <>
                <Link href='/' >
                <Button className='btn btn-primary'>
                    <ArrowLeft size={24} className='mr-2' />
                    Back
                </Button>
                </Link>
                <ReportForm onGenerateReport={handleGenerateReport} />
               </>
            )}
                <Toaster  />
            
        </div>
    );

    };

   



export default ReportPage;
"use client";
import React, { useState } from 'react';
import ReportForm from '@/components/Report';
import { useCompletion, useChat } from "ai/react";
import { Dialog } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Toaster } from "react-hot-toast";
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { toast } from 'react-hot-toast';
import { ArrowBigLeft, Copy, Save, StopCircle } from 'lucide-react';
const ReportPage = () => {

    
    const { complete, completion,stop, isLoading } = useCompletion({
    api : "/api/reports",
    
   });
 
    const [generatedReport, setGeneratedReport] = useState('');
    const lastCompletion = React.useRef("");


    const handleGenerateReport = async ({ companyName, foundingYear, internshipTitle, projectTitle ,description}: { companyName: string, foundingYear: number, internshipTitle: string, projectTitle: string,description:string }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const report = JSON.stringify({
            companyName,
            foundingYear,
            internshipTitle,
            projectTitle,
            description,
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
                   <div className="flex justify-start items-center gap-x-3  max-w-3xl px-6">
                   <h1 className="sm:text-5xl text-xl text-center bg-gradient-to-r from-rose-900 via-blue-500 to-pink-600 bg-clip-text font-extrabold text-transparent tracking-tight">
                        Generated Report </h1>
                        {/* back  */}
                        <Button
                        className='flex w-1/4 mx-auto btn btn-primary' 
                          onClick={() => {
                            setGeneratedReport('');

                        }
                        }>
                            <ArrowBigLeft size={24} className='mr-2' />
                            Back
                        </Button>

                   </div>

                        <div className='flex flex-col gap-y-3 sm:w-3/4 mx-auto w-full'>
                            <Textarea
                                value={generatedReport}
                                onChange={() => {}}
                                className='w-full'
                                rows={30}

                                
                            />
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

                            </div>
                        </div>
                    </div>
                </Dialog>
            
            )}
            {!generatedReport && (
                <ReportForm onGenerateReport={handleGenerateReport} />
            )}
                <Toaster  />
            
        </div>
    );

    };

   



export default ReportPage;
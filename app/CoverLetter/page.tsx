"use client";
import React, { useState } from 'react';
import GenerateCoverLetter from '@/components/GenerateCoverLetter';
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

const CoverLetterPage = () => {
       const [generateCoverLetter, setGenerateCoverLetter] = useState('');
const [editorState, setEditorState] = React.useState(
    `<span>...</span>`
  );

      const editor = useEditor({
    autofocus: true,
    extensions: [StarterKit],
    content: generateCoverLetter,
    onUpdate: ({ editor }) => {
      setGenerateCoverLetter(editor.getHTML());
    },
  });
   

    
    const { complete, completion,stop, isLoading, } = useCompletion({
    api : "/api/coverLetter",
   });
 
 
    const lastCompletion = React.useRef("");

    
     
   
    

    const handleGenerateReport = async ({ 
         companyName,
                companyAddress,
                yourState,
                yearOfExperience,
                description,
                jobTitle,
                yourName,
                yourAddress,
                phone,
                projectTitle,
                
    }: {
        companyName: string,
        companyAddress: string,
        yourState: string,
        yearOfExperience: number,
        description: string,
        jobTitle: string,
        yourName: string,
        yourAddress: string,
        phone: string,
        projectTitle: string,

     }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const report = JSON.stringify({
           
                companyName,
                companyAddress,
                yourState,
                yearOfExperience,
                description,
                jobTitle,
                yourName,
                yourAddress,
                phone,
                projectTitle,
                
         
            
        })

        await complete(report); 
        }

       

        React.useEffect(() => {
          if (!completion ) return;
          const diff = completion.slice(lastCompletion.current.length);
          lastCompletion.current = completion;
          console.log(completion);
          setGenerateCoverLetter(diff);



        }, [completion]);

    


    
    

 return (
        <div className=' flex justify-center items-center mx-auto p-4 flex-col gap-y-3 bg-white min-h-screen'>
        
            
            {generateCoverLetter && (
                <Dialog
                >
                    <div className='flex flex-col gap-y-3 w-full'>
                   <div className="flex justify-start flex-row items-center gap-x-3  max-w-3xl px-6">
                   <Button
                        className='flex mx-auto btn btn-primary' 
                          onClick={() => {
                            setGenerateCoverLetter('');

                        }
                        }>
                            <ArrowLeft size={24} className='mr-2' />
                            Back
                        </Button>
                
                   </div>

                        <div className='flex flex-col gap-y-3 sm:w-3/4 mx-auto w-full'>
                           
                             <div className="prose prose-sm  mt-4 text-start flex justify-center items-center mx-auto sm:w-3/4 w-[100%]">
                             <Textarea
                                value={completion}
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
                                        navigator.clipboard.writeText(generateCoverLetter);

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
                                        axios.post('/api/coverLetter', generateCoverLetter);
                                    }}
                                >
                                    <Save size={24} className='mr-2' />
                                    Save
                                </Button>
                                {/* REGENERATE */}
                                <Button
                                    className='btn btn-primary'
                                    onClick={() => {
                                       
                                        complete(generateCoverLetter);
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
            {!generateCoverLetter && (
               <>
                <Link href='/' >
                <Button className='btn btn-primary'>
                    <ArrowLeft size={24} className='mr-2' />
                    Back
                </Button>
                </Link>
                <GenerateCoverLetter onGenerateReport={handleGenerateReport} />
               </>
            )}
                <Toaster  />
            
        </div>
    );

    };

   



export default CoverLetterPage;
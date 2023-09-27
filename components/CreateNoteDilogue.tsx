"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Loader2, Plus } from "lucide-react";
// import { Input } from "./ui/input";
import axios from "axios";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Quicksand } from "next/font/google";
import { useMutation } from "@tanstack/react-query";
import {useRouter} from "next/navigation";
const quicksand = Quicksand({ subsets: ["latin"] });

type Props = {};


const CreateNoteDialogue = (props: Props) => {

     const router = useRouter();  
    const [input, setInput] = useState("");
    const [creating, setCreating] = useState(false);
    const uploadToFirebase = useMutation({
      mutationFn: async (noteId: string) => {
        const response = await axios.post("/api/uploadToFirebase", {
          noteId,
        });
        console.log(response.data);
        
        return response.data;
      },
    });
    const createNoteBook = useMutation(
      async (data: { name: string }) => {
        const response = await axios.post("/api/createNoteBook", 
        {
          name: input,
        }
        );
        return response.data;
      }
      
    );
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      setCreating(true);
      e.preventDefault();
      if (input.trim().length === 0) {
        return;
      }
      if(input === ""){
        return;
      }
      await createNoteBook.mutateAsync({
        name: input,
      },
      {
        onSuccess: ({note_id}) => {
          console.log(`notebook created with id ${note_id}`);
          uploadToFirebase.mutate(note_id);
          setCreating(false);
          setInput("");

          router.push(`/notebook/${note_id}`);

          
        },
        onError: (error) => {
          setCreating(false); 
          console.log(error);
        }
      }
    
      );}
    
  return (

    <>
        <Dialog >
      <DialogTrigger>
        <div className="border-dashed border-2 flex border-green-600 h-full rounded-lg items-center justify-center sm:flex-col hover:shadow-xl transition hover:-translate-y-1 flex-row p-4">
          <Plus className="w-6 h-6 text-green-600" strokeWidth={3} />
          <h2 className="font-semibold text-green-600 sm:mt-2 ">
            New Note Book
          </h2>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Note Book</DialogTitle>
          <DialogDescription>
       {!creating && (<> You can create a new note by clicking the button below.</>)}
          </DialogDescription>
        </DialogHeader>
        {creating ? (
      <>
     <div className="flex flex-row justify-center items-center gap-x-1">
     Creating...
        <Loader2 className="animate-spin " size={24} />
       
     </div>
      </>
) : (
  <form onSubmit={handleSubmit}>
    <Input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Name..."
    />
    <div className="h-4"></div>
    <div className="flex items-center gap-2">
      <Button type="reset" variant="secondary">
        Cancel
      </Button>
      <Button type="submit" disabled={createNoteBook.isLoading}>
        {createNoteBook.isLoading ? (
          <Loader2 className="animate-spin" size={24} />
        ) : (
          "Create"
        )}
      </Button>
    </div>
  </form>
)}

      </DialogContent>
    </Dialog>
      </>
  
  );
};

export default CreateNoteDialogue;
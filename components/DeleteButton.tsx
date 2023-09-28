"use client";
import React from "react";
import { Button } from "./ui/button";
import { Loader2, Trash } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Dialog } from "./ui/dialog";
import { Toaster } from "react-hot-toast";
import { toast } from 'react-hot-toast';
const confirm ="Are you sure?"  

type Props = {
  noteId: number;
};

const DeleteButton = ({ noteId }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const deleteNotes = async () => {
    setIsOpen(true);
      }
  const router = useRouter();
  const deleteNote = useMutation({
    mutationFn: async () => {
      const response = await axios.post("/api/deleteNote", {
        noteId,
      });
      return response.data;
    },
  });
  return (
   <>
   {!isOpen && (
     <Button
     variant={"destructive"}
     size="sm"
     disabled={deleteNote.isLoading}
     onClick={() => {
       deleteNotes();
     }}
   >
     <Trash />
   </Button>
   )}
   {isOpen && (
     <Dialog open={isOpen}>
     <div className="flex flex-col gap-y-4">
       <p>{confirm}</p>
       <div className="flex gap-x-4">
         <Button
           variant="destructive"
           onClick={() => {
             deleteNote.mutate(undefined, {
               onSuccess: () => {
                  toast.success("Note deleted successfully");
                 router.push("/dashboard");
               },
               onError: (err) => {
                  toast.error("Error deleting note");
                 console.error(err);
               },
             });
           }}
         >
            {deleteNote.isLoading ? (
                <Loader2 className="animate-spin " size={24} />
              ) : (
                "Delete"
              )}
         </Button>
         <Button variant="secondary" onClick={() => setIsOpen(false)} disabled={deleteNote.isLoading}>
           Cancel
         </Button>
       </div>
     </div>
   </Dialog>
   )}
    <Toaster  />
   </>
  );
};

export default DeleteButton;
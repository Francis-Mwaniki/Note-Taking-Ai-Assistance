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
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { Quicksand } from "next/font/google";
const quicksand = Quicksand({ subsets: ["latin"] });

type Props = {};

const CreateNoteDialogue = (props: Props) => {

    const [input, setInput] = useState("");
  return (

    <main className={quicksand.className}>
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
            You can create a new note by clicking the button below.
          </DialogDescription>
        </DialogHeader>
        <form>
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}

            placeholder="Name..."
          />
          <div className="h-4"></div>
          <div className="flex items-center gap-2">
            <Button type="reset" variant={"secondary"}>
              Cancel
            </Button>
            <Button
              type="submit"
              className=""
            
            >
              
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
      </main>
  
  );
};

export default CreateNoteDialogue;
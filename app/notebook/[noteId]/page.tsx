import DeleteButton from '@/components/DeleteButton'
import TipTapEditor from '@/components/TipTapEditor'
import { Button } from '@/components/ui/button'
import { clerk } from '@/lib/clerk-server'
import { db } from '@/lib/db'
import { $notes } from '@/lib/db/schema'
import { auth } from '@clerk/nextjs'
import { and, eq } from 'drizzle-orm'
import { ArrowBigLeftIcon, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'
type Props = {
    params:{
        noteId: string
    }
}



const Notebook = async ({params:{noteId}}: Props) => {
    const {userId} = auth()
    if(!userId){
       return redirect('/sign-in')
    }
     const user = await clerk.users.getUser(userId);
    const notes = await db.select().from($notes).where(and(
        eq($notes.id, parseInt(noteId)),
        eq($notes.userId, userId)
    ))
    if(notes.length === 0){
        return redirect('/dashboard')
    }
    const notesData = notes[0]

    return (
        <div className="min-h-screen grainy sm:p-8 p-2">
        <div className="max-w-4xl mx-auto">
          <div className="border shadow-xl border-stone-200 rounded-lg p-4 flex items-center flex-wrap">
            <Link href="/dashboard">
              <Button className="" size="sm">
              <ArrowLeft className="mr-2" size={24} />
                Back
              </Button>
            </Link>
            <div className="w-3"></div>
            <span className="font-semibold">
              {user.firstName?.toUpperCase()} 
            </span>
            <span className="inline-block mx-1">/</span>
            <span className="text-stone-500 font-semibold">{notesData.name}</span>
            <div className="ml-auto">
              <DeleteButton noteId={notesData.id} />
            
            </div>
          </div>
  
          <div className="h-4"></div>
          <div className="border-stone-200 shadow-xl border rounded-lg px-2 py-8 w-full">
            <TipTapEditor note={notesData} />
          </div>
        </div>
      </div>
    )
}

export default Notebook
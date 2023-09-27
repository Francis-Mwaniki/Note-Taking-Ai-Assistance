import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { UserButton, auth } from '@clerk/nextjs'
import { ArrowBigLeftIcon, ArrowLeft } from 'lucide-react'
import { DM_Sans, Quicksand } from 'next/font/google'
import CreateNoteDialogue  from '@/components/CreateNoteDilogue'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import { db } from '@/lib/db'
import { $notes } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'
import { clerk } from '@/lib/clerk-server'
const quicksand= Quicksand({ subsets: ['latin'] })
const dm_sans= DM_Sans({ subsets: ['latin'] })
type Props = {}

const DashboardPage = async (props: Props) => {
    const { userId } = auth();
    if (!userId) {
      return <div>loading...</div>;
    }
    
  const user = await clerk.users.getUser(userId);
    const notes = await db
      .select()
      .from($notes)
      .where(eq($notes.userId, userId!));
  
  return (
   <main className={dm_sans.className}>
   <div className="min-h-screen grainy">
    <div className="max-w-7xl p-10 mx-auto">
   <div className="h-14"></div>
    <div className="flex justify-between items-center md:flex-row flex-col">
        <div className="flex justify-center gap-x-2 items-center">
            <Link href="/">
                <Button>
                    <ArrowLeft className="mr-2" size={24} />
                    Back
                </Button>
                </Link>
                <div className="w-4"></div>
                <h2 className="font-normal">My Notes</h2>
                <div className="w-4"></div>
                <UserButton afterSignOutUrl="/" />
        </div>
    </div>
    <div className="h-8"></div>
    <Separator/>
    <div className="h-8"></div>
    {/* list all notess */}
    {notes.length === 0 && (
            <div className="text-center">
              <h2 className="text-xl text-gray-500">You have no notes yet.</h2>
            </div>
          )}
    {/* all notes */}
    <div className="grid sm:grid-cols-3 md:grid-cols-5 grid-cols-1 gap-2">
        <CreateNoteDialogue />
        {notes.map((note) => {
              return (
                <a href={`/notebook/${note.id}`} key={note.id}>
                  <div className="border border-stone-300 rounded-lg overflow-hidden flex flex-col hover:shadow-xl transition hover:-translate-y-1">
                    <Image
                      width={400}
                      height={200}
                      alt={note.name}
                      src={note.imageUrl || ""}
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {note.name}
                      </h3>
                      <div className="h-1"></div>
                      <p className="text-sm text-gray-500">
                        {new Date(note.createdAt).toLocaleDateString()}
                      </p>
                      {/* author */}
                      <div className="h-1"></div>
                      <p className="text-sm text-gray-500">
                        author {user.firstName?.toUpperCase()}-{user.lastName?.toUpperCase()}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
    </div>
    </div>
   </div>
   </main>
  )
}

export default DashboardPage
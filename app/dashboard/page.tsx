import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { UserButton } from '@clerk/nextjs'
import { ArrowBigLeftIcon } from 'lucide-react'
import { Quicksand } from 'next/font/google'
import CreateNoteDialogue  from '@/components/CreateNoteDilogue'
import Link from 'next/link'
import React from 'react'
const quicksand= Quicksand({ subsets: ['latin'] })
type Props = {}

const DashboardPage = (props: Props) => {
  return (
   <main className={quicksand.className}>
   <div className="min-h-screen">
    <div className="max-w-7xl p-10 mx-auto">
   <div className="h-14"></div>
    <div className="flex justify-between items-center md:flex-row flex-col">
        <div className="flex justify-center gap-x-2 items-center">
            <Link href="/">
                <Button>
                    <ArrowBigLeftIcon className="mr-2" size={24} />
                    Back
                </Button>
                </Link>
                <div className="w-4"></div>
                <h2 className="font-normal">My Notes</h2>
                <div className="w-4"></div>
                <UserButton />
        </div>
    </div>
    <div className="h-8"></div>
    <Separator/>
    <div className="h-8"></div>
    {/* list all notess */}
    <div className="text-gray-700 text-center">
        <h2 className="text-xl ">You have no notes yet!</h2>
    </div>
    {/* all notes */}
    <div className="grid sm:grid-cols-3 md:grid-cols-5 grid-cols-1 gap-2">
        <CreateNoteDialogue />
    </div>
    </div>
   </div>
   </main>
  )
}

export default DashboardPage
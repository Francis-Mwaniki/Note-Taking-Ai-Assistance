import { Quicksand} from 'next/font/google'
import TypewriterEffect from '@/components/TypeWriterEffect'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowBigRightIcon } from 'lucide-react'
 const quicksand= Quicksand({ subsets: ['latin'] })
export default function Home() {
  return (
    <main className=" w-screen min-h-screen bg-gradient-to-tl from-gray-100 to-gray-300">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="bg-gradient-to-r from-rose-900 via-blue-500 to-pink-600 bg-clip-text font-extrabold text-transparent tracking-tight sm:text-6xl">
          Your Note Assistant.
        </h1>
        <div className="mt-2"></div>
        <div className={quicksand.className}>
          <p className="text-center text-gray-800 text-xl font-normal">Use NoteAiAssistant to take notes and organize your thoughts.</p>
          <div className="mt-4"></div>
          <h2 className="text-center text-gray-800 text-xl font-semibold">
          <TypewriterEffect />
          </h2>
          <div className="mt-4"></div>
          <div className="flex justify-center">
            <Link className="text-gray-800 text-xl font-semibold"  href='/dashboard'>
            <Button className="">
              Get Started
              <ArrowBigRightIcon className="ml-2" size={24} />
            </Button>
            </Link>
            </div>
          
        </div>
       
      </div>
    </main>
  )
}

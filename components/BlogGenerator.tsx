import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Textarea } from './ui/textarea'
import { Toaster } from "react-hot-toast";
import { toast } from 'react-hot-toast';
import { Input } from './ui/input'
import { Card, CardHeader, CardTitle } from './ui/card'
import { useCompletion } from 'ai/react'
import { Quicksand, DM_Sans, Inter, Poppins} from 'next/font/google'
import { ArrowLeft, HeartHandshake, Loader2, Sparkle, Sparkles, Tags } from 'lucide-react'
import { Button } from './ui/button'
const poppins= Poppins({
    subsets: ['latin'],
    weight: '400'
  })
  const dm_sans= DM_Sans({
    subsets: ['latin'],
  })
type Props = {
    setIsOpen: (isOpen: boolean) => void
}

const BlogGenerator = (props: Props) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [tags, setTags] = React.useState('')
    const [autocomplete, setAutocomplete] = React.useState([])
    const [selectedTags, setSelectedTags] = React.useState([])
    const [error, setError] = React.useState('')
    const [success, setSuccess] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [isCopied, setIsCopied] = React.useState(false)
    const { complete, completion,stop, isLoading, } = useCompletion({
        api : "/api/Blog",
       });
       const lastCompletion = React.useRef("");

       React.useEffect(() => {
         if (!completion ) return;
         const diff = completion.slice(lastCompletion.current.length);
         lastCompletion.current = completion;
         console.log(completion);
            if (completion === "success") {
                setSuccess("success")
                setLoading(false)
                stop()
                setTimeout(() => {
                    setSuccess('')
                    close()
                }, 2000);
            }



       }, [completion]);


       const handleGenerateBlog = async ({
        title,
        description,
        tags,
    }: {
        title: string,
        description: string,
        tags: string,
    }) => {
      
      if(title === ""){
        toast.error("Please enter a title for the blog");
        return;
        }
        if(description === ""){
            toast.error("Please enter a description for the blog");
            return;
            }
            if(tags === ""){
                toast.error("Please enter a tags for the blog");
                return;
                }

        setLoading(true)
       
        const data = JSON.stringify({
            title,
            description,
            tags,
        })

        await complete(data);
       
       
    }
  return (
 <div className={`${dm_sans.className} mx-2
 ` }>
<Dialog >
 {!loading && (
    <>
     <DialogTrigger>
    <Button onClick={open}>
      Start Blogging
    </Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Blog Topic</DialogTitle>
      <DialogDescription>
        <h3 className='py-3'>Enter a title for your blog post</h3>
        <div>
          
          
       <form onSubmit={e => {
           e.preventDefault()
           handleGenerateBlog({title,description,tags})
         }}
         className='flex flex-col gap-y-3 mx-1'
         >

        <label>
           
            <Input
                placeholder="Blog Title"
                value={title}
                className='text-lg text-black'
                onChange={e => setTitle(e.target.value)}
            />
        </label>

        <Textarea
            placeholder="Blog description"
            value={description}
            className='text-lg text-black'
            onChange={e => setDescription(e.target.value)}
        />
    
      
        <Input
            placeholder="Tags"
            value={tags}
            onChange={e => setTags(e.target.value)}
        />
        <Button type="submit">
            <Sparkles size={24} className='mr-2' />
            Generate Blog</Button>
        </form>

        </div>

      </DialogDescription>
    </DialogHeader>
  </DialogContent>
    </>
 )}
 {loading && (
    /* Ai auto generating blog component with tailwindcss */
   <>
    <div>
    
        <div className='w-full mx-auto'>
            {isLoading && (
                <div className='flex justify-center items-center'>
                    <Loader2 size={64} className='animate-spin' />
                </div>
            
            )}
            <div className=' w-full'>
                <Textarea
                    value={completion}
                    onChange={() => {}}
                    className='w-full'
                    readOnly
                    rows={20}
                />

{/* copy */}
<div className='my-2'>
    <Button
        className='w-full justify-self-center flex justify-center'
        onClick={() => {
            navigator.clipboard.writeText(completion)
            setIsCopied(true)
            setTimeout(() => {

                
                toast.success('Copied to clipboard')
                setIsCopied(false)
            }
            , 100);

        }}
    >
        {isCopied ? ('Copied') : ('Copy')}
    </Button>
    
</div>
                </div>
                </div>
    </div>


   </>

 )}
</Dialog>

{isLoading && (
    <Button onClick={() => {
        close()
        stop();
    }
    }>
        <ArrowLeft size={24} className='mr-2' />
       stop
    </Button>
)}
<Toaster />
</div>
  )
 
}

export default BlogGenerator
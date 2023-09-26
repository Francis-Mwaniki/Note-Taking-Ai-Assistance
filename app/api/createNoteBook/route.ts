import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

///api/createNoteBook
export async function POST(req:Request){
    const {userId} =auth()
    if(!userId){
        return new NextResponse('Unauthorized',{status:401})
    }
    const body=await req.json();
    const {name}=body;

    if(!name){
        return new NextResponse('Name is required',{status:400})
    }

}
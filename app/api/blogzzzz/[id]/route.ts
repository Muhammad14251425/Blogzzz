
import connectMongoDb from "@/lib/mongodb";
import BlogPost from "@/models/BlogsModels";
import { NextRequest, NextResponse } from "next/server";

interface Params {
    id: string;
}

export interface Iprops {
    params: Params;
}

export async function GET(request:NextRequest,{params}:Iprops){
const {id} = params;
await connectMongoDb();
const blogzz = await BlogPost.findOne({_id:id});
return NextResponse.json({blogzz},{status:200})
}
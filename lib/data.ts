"use server";
export interface Params {
  id: string;
}

interface Iprops {
  params: {
    id: string; 
  };
}
import { NextRequest, NextResponse } from "next/server";
import connectMongoDb from "./mongodb";
import BlogPost from "@/models/BlogsModels";

export const getData = async ({id}:{id:string}) => {
  try {
    
    await connectMongoDb();
    const blogzz = await BlogPost.findOne({ _id: id });
    return {blogzz}
  } catch (error) {}
};
export const getBlogzzz = async () => {
  await connectMongoDb();
    const Blogpost = await BlogPost.find();
    return Blogpost
};

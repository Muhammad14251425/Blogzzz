// 'use client'
import Pic from "@/public/pic.jpg"
import { useEffect, useState } from 'react';
import { it } from 'node:test';
import Image from 'next/image';
import { getData } from "@/lib/data";
type Blogzzz = {
    _id: string;
    author: string;
    title: string;
    photos: string[];
    headings: string[];
    paragraphs: string[];
};
export interface Params {
    id: string;
  }
  
  interface Iprops {
    params: {
      id: string; 
    };
  }
const Page = async ({ params }: Iprops) => {
    const { id } = params;
    const data = await getData({id});
    const blogzz = Object.values(data as {blogzz:any})

    return (
        <div className='h-full '>
            {
                blogzz.map((item:any)=>(
                    <div key={item._id} className='max-w-[1500px] mx-auto my-4 px-8 text-center h-full ' >
                <div className="flex justify-center ">
                    <Image src={item.photos[0]} height={1000} width={1000} alt="my pic" priority className="h-[500px] w-[50%] object-contain" />
                </div>

                <h1 className='text-6xl my-10 font-bold tracking-wide'>This is my Title</h1>
                <h2 className="text-left ml-[69px] underline text-2xl font-bold my-4">{item.headings[0]}</h2>
                <p className="px-14">{item.paragraphs[0]}
                </p>
                <div className="flex justify-center mx-10 my-6 gap-x-40">
                <Image src={item.photos[1]} height={1000} width={1000} alt="my pic" priority className="h-[450px] w-[42%] object-contain" />
                <Image src={item.photos[2]} height={1000} width={1000} alt="my pic" priority className="h-[450px] w-[42%] object-contain" />
                </div>
                <h3 className="text-left underline ml-[69px] text-2xl font-bold my-4">{item.headings[1]}</h3>
                <p className="px-14">{item.paragraphs[1]}
                </p>
                <h4 className="text-left underline ml-[69px] text-2xl font-bold my-4">{item.headings[2]}</h4>
                <p className="px-14">{item.paragraphs[2]}
                </p>

                <h2 className="pt-10 pb-5 underline ">Written by: {item.author}</h2>
                
            </div>
                ))
            }
            

        </div>
    )
}

export default Page


{/* <div className='flex items-center  py-4 px-8 max-w-[1500px] mx-auto'>
                {
                    blogzz.map((item) => (
                        <div key={item._id} >
                            <div className='grid grid-cols-2 w-full'>
                                <div>
                                    <h2 className='text-5xl font-bold'>{item.title}</h2>
                                        <p></p>
                                </div>
                                <Image src={item.photos[0]} alt={item.headings[0]} height={500} width={500} className='h-[300px] w-[420px] flex items-center justify-center' />
                            </div>
                        </div>
                    ))
                }
            </div> */}
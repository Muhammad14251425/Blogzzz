import connectMongoDb from '@/lib/mongodb';
import BlogPost from '@/models/BlogsModels';
import {NextRequest,NextResponse} from 'next/server'


export async function POST(request:NextRequest){
    try {
        const {author,title,photos,headings,paragraphs} = await request.json();
        await connectMongoDb();
        await BlogPost.create({author,title,photos,headings,paragraphs});
        return NextResponse.json({message: "BlogPost created successfullyyyyyyyyyyyyyy"},{status:201})
    } catch (error) {
        console.log("unable to create blog post");
        
    }
}
export  async function GET(){
    await connectMongoDb();
    const Blogpost = await BlogPost.find();
    return NextResponse.json(Blogpost)
}



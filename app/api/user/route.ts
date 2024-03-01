import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcrypt";
import { z } from "zod";
import connectMongoDb from "@/lib/mongodb";
import UserDetail from "@/models/users";
const userSchema = z.object({
    username : z.string().min(1,'Username is required').max(100),
    email: z.string().min(1,'Email is required').email('Invalid email'),
    password: z.string().min(1,'Password is required').min(8,'Password must have 8 chracters')
})
export async function POST(req:NextRequest){
try {
    await connectMongoDb()
    const body = await req.json();
    const {username, email, password} = userSchema.parse(body);
    const existinguserbyEmail = await UserDetail.findOne({email:email})
    if(existinguserbyEmail){
        return NextResponse.json({user:null, message: 'User already exists'}, {status:409})
    }
    const existinguserbyUsername = await UserDetail.findOne({username:username})
    if(existinguserbyUsername){
        return NextResponse.json({user:null, message: 'Username already exists'}, {status:409})
    }
    const hashedPassword = await hash(password,10)
    const newuser = await UserDetail.create({
        email,
        username:username,
        password:hashedPassword
    })
    const {password:newUserPassword,...rest} = newuser
    return NextResponse.json({user:rest,message:'User created successfully'},{status:200})
} catch (error) {
    return NextResponse.json({message: 'something went wrong'},{status:500})
}
} 
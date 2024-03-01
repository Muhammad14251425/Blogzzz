import connectMongoDb from "@/lib/mongodb"
import UserDetail from "@/models/users";
import { NextRequest, NextResponse } from "next/server";

export const POST =async(request:NextRequest) => {
try {
    const {username,email,password} = await request.json();
    await connectMongoDb();
    await UserDetail.create({username,email,password});
    return NextResponse.json({message: "User created successfully"})
} catch (error) {
    console.log("unable to create user details");
    
}
}
import { authOptions } from "@/lib/authOptions"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";


const page = async () => {
    const session = await getServerSession(authOptions)
    console.log(session);
    if(!session){
      redirect("/signin")
    }
    
  return (
    <div>page</div>
  )
}

export default page
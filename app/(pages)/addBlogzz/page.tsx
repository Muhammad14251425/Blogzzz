import AddBlogzz from "@/components/AddBlogzz"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"


const Page = async () => {
  const session = await getServerSession()
    if(!session){
      redirect('/signin')
    }
  return (
    <div>
        <AddBlogzz />
    </div>
  )
}

export default Page
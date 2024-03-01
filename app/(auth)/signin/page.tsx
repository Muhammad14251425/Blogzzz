
import Signin from '@/components/Signin'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'


const Page = async () => {
 
  const  session  = await getServerSession()
  if(session){
      redirect("/dashboard")
  }
  console.log(session);
  return (  
    <div>
        <Signin />
    </div>
  )
}

export default Page
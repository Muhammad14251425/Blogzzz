'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

const CheckSession = () => {
    const router = useRouter()
    const { data: session } = useSession()
    if(!session){
        router.push("/signin")
    }
  
}

export default CheckSession
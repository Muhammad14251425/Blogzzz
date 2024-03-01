'use client'
import Link from 'next/link'
import { Button } from './ui/button'
import { signOut, useSession } from 'next-auth/react'

const Signout = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <div>
        <Link href="/">
        <Button variant="ghost" className=' w-full' onClick={() => signOut()}>Logout</Button>
        </Link>
      </div>
    )
  } else {
    return (
      <div>
        <Link href="/signin">
          <Button variant="link" >Sign in</Button>
        </Link>
      </div>
    )
  }

}

export default Signout
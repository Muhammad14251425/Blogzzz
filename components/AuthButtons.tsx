'use client'
import { signIn, signOut } from 'next-auth/react'

import { Button } from '@/components/ui/button'
import React from 'react'

const AuthButtons = () => {
  return (
    <div className='flex flex-col gap-y-2'>
        <Button type="submit" onClick={()=> signIn('google') } variant="destructive" className="w-full">Continue with Google</Button>
        <Button type="submit" onClick={()=> signIn('github') } variant="destructive" className="w-full">Continue with Github</Button>
    </div>
  )
}

export default AuthButtons
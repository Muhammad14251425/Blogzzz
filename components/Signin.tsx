'use client'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AuthButtons from "./AuthButtons"
import { Loader2 } from "lucide-react"
import { signIn } from "next-auth/react"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { useState } from "react";
const formSchema = z.object({
  email : z.string().min(1,'Email is required').email('Invalid email'),
  password: z.string().min(2, 'Password is required').min(8, 'Password must have at least 8 characters'),
})

const Signin = () => {
  const [loading,setloading]=useState(false)
  const router = useRouter()
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const onSubmit = async(values: z.infer<typeof formSchema>) => {
    setloading(true)
    const res = await signIn('credentials',{
      email: values.email,
      password: values.password,
      redirect:false
    })
    if(res?.error){
      console.log("hello");
      toast({
        title: "Error",
        description: "invalid Credentials",
        variant : 'destructive'
      })
    } else {
      router.push('/dashboard')
    }
    setloading(false)
  } 
  return (
    <div className="h-screen flex items-center justify-center" >
      <div className="w-1/2 border p-6 border-black rounded-md">
      <Form {...form}  >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="abc@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="pt-2">
          {
            loading ? (
            
              <Button type="submit" variant="destructive" className="w-full "><Loader2 className="animate-spin"/></Button>
              
            ):(
              <Button type="submit" variant="destructive" className="w-full">Sign In</Button>
              
            )
          }
        
        </div>
      </form>
      <div className=" my-2 flex w-full items-center justify-evenly 
      before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400
      after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
            OR 
      </div>
        <AuthButtons />
      <p className="text-sm text-center text-gray-600 mt-3" >
        Don&apos;t have an account ?  <Link href="/signup"><span className="text-black/40 hover:underline cursor-pointer">Register</span></Link>
      </p>
      
      
    </Form>
    </div>
    </div>
  )
}

export default Signin
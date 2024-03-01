import { FiAlignJustify } from "react-icons/fi";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";
import Signout from "./Signout";

const Navbar = () => {
    return (
        <nav className="border-b shadow-sm bg-gray-200">
            <div className="flex justify-between items-center py-4 px-8 max-w-[1500px] mx-auto">
                <Link href="/"><h2 className="font-[1000] tracking-[7px] sm:tracking-[15px] text-3xl">Blogzzz</h2></Link>
                <div className="sm:hidden">
                    <Sheet>
                        <SheetTrigger><FiAlignJustify className="h-8 w-8" /></SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                            <Link href="/addBlogzz">
                                <SheetTitle className="text-left mt-14 text-2xl animate-pulse">Add Your Blog Now</SheetTitle>
                            </Link>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
                <div className="hidden sm:flex flex-row">
                    <Link href="/dashboard">
                        <h2 className="font-semibold text-xl animate-pulse">Add Your Blog Now</h2>
                    </Link>
                        <Signout />
                    
                </div>
            </div>
        </nav>
    )   
}

export default Navbar



import Image from "next/image";
import Link from "next/link";
import logo from "../components/images/futuresampLogo.png"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import ThemeToggler from "@/components/ThemeToggler";

const Navbar = () => {
    return ( 
        <>
            <nav className="bg-primary dark:bg-slate-700 py-2 px-5 flex justify-between">
                <Link href="/">
                    <Image src={logo} alt="ericPaneHome" width={40} />
                </Link>

                <div className="flex items-center">
                    <ThemeToggler />

                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src="https://ui.shadcn.com/avatars/shadcn.jpg" />
                                <AvatarFallback className="text-neutral-900">
                                    OE
                                </AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link href="/profile">
                                    Profile
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/auth">
                                    Logout
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;
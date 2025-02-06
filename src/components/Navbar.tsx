import Image from "next/image";
import Link from "next/link";
import logo from "../components/images/futuresampLogo.png"

const Navbar = () => {
    return ( 
        <>
           <nav className="bg-primary dark:bg-slate-700 py-2 px-5 flex justify-between">
                <Link href="/">
                <Image src={logo} alt="ericPaneHome" width={40} />
                </Link>
            </nav> 
        </>
     );
}
 
export default Navbar;
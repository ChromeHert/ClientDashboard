import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

interface PreviousBtnProps {
    text: string;
    link: string;
}

const PreviousBtn = ({ text, link }: PreviousBtnProps) => {
    return ( 
        <>
        <Link href={link} className="flex items-center text-sm text-gray-600 hover:text-gray-900 font-bold mb-5 gap-1">
            <ArrowLeftCircle size={16} className="mr-1" /> { text }
        </Link>
        </>
     );
}
 
export default PreviousBtn;
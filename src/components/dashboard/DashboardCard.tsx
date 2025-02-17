import { Card, CardContent } from "../ui/card";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
    title: string;
    count: number;
    icon: React.ReactElement<LucideIcon>;

}

const DashboardCard = ({ title, count, icon }:  DashboardCardProps) => {

    return ( 
        <>
            <Card className="bg-slate-100 dark:bg-slate-800 p-2 pb-0">
                <CardContent>
                    <h3 className="text-3xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200">
                        {title}
                    </h3>
                    <div className="flex gap-5 justify-center items-center">
                        <div className="flex items-center justify-center bg-slate-200 dark:bg-slate-700 rounded-full p-5">
                            {icon}
                            <h3 className="text-4xl font-semibold text-slate-500 dark:text-slate-200">
                            {count}
                            </h3>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
     );
}
 
export default DashboardCard;
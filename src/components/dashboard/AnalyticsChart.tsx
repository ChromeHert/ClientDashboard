'use client';

import { 
    Line, 
    LineChart, 
    XAxis, 
    YAxis,
    CartesianGrid,
    ResponsiveContainer } from 'recharts'
import { 
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle

     } from '../ui/card';
     import data from '@/data/analytics';

const AnalyticsChart = () => {
    return ( 
        <>
        <Card>
            <CardHeader>
                <CardTitle>
                    Analytics For The Year
                </CardTitle>
                <CardDescription>
                    Views Per Month
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div style={{width: '100%', height: 300}}>
                    <ResponsiveContainer>
                        <LineChart width={1180}
                        height={300} data={data}>
                            <Line  type='monotone' dataKey='uv' stroke='#8884d8' />
                            <CartesianGrid stroke='#ccc'/>
                            <XAxis  dataKey='name'/>
                            <YAxis />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
        </>
     );
}
 
export default AnalyticsChart;
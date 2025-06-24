"use client";
import {useState, useEffect} from "react";
import axios from "axios";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function TodayJob() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/latest-per-table");
            setData(res.data);
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 1000); // refresh every 1 sec
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex w-screen h-screen justify-center items-center">
            <div className="bg-gray-50 w-2/3 p-4 rounded-xl">
                <div>

                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px] text-center">Table ID</TableHead>
                            <TableHead className="text-center">Current Job</TableHead>
                            <TableHead className="text-center">Current Process</TableHead>
                            <TableHead className="text-center">Product Count</TableHead>
                            <TableHead className="text-center">Job Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((row:any) => (
                            <TableRow key={row.id}>
                                <TableCell className="text-center">{row.table_id}</TableCell>
                                <TableCell className="text-center">{row.job_id}</TableCell>
                                <TableCell className="text-center">{row.process_id}</TableCell>
                                <TableCell className="text-center">{row.count}</TableCell>
                                <TableCell className="text-center">{row.job_status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
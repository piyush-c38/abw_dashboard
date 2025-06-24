"use client";
import { useState, useEffect } from "react";
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
        <div className="flex flex-col w-screen h-screen justify-start items-center pt-40 gap-10">
            <div className="">
                <h2 className="text-4xl text-black">Current Job Status</h2>
            </div>
            <div className="bg-gray-50 w-2/3 p-4 rounded-sm shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px] text-center py-4">Table ID</TableHead>
                            <TableHead className="text-center">Current Job</TableHead>
                            <TableHead className="text-center">Current Process</TableHead>
                            <TableHead className="text-center">Product Count</TableHead>
                            <TableHead className="text-center">Job Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((row: any) => (
                            <TableRow key={row.id} >
                                <TableCell className="text-center py-4">{row.table_id}</TableCell>
                                <TableCell className="text-center py-4">{row.job_id}</TableCell>
                                <TableCell className="text-center py-4">{row.process_id}</TableCell>
                                <TableCell className="text-center py-4">{row.count}</TableCell>
                                <TableCell
                                    className={`text-center py-4 ${row.job_status == 1 ? "text-green-600" : "text-red-600" }`}
                                >
                                    {row.job_status == 1 ? "Running" : "Completed"}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
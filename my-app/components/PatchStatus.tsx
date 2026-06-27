'use client';

import React from "react";
import { useRouter } from "next/navigation";

interface PatchStatusProps {
    todo: TypeToDo;
}

export default function PatchStatus({ todo }: PatchStatusProps) {
    const router = useRouter();

    const handleCheckboxChange = async () => {
        const updatedStatus = !todo.completed;

        try {
            const response = await fetch(`http://localhost:3000/api/todos/${todo.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ completed: updatedStatus }),
            });

            if (!response.ok) {
                throw new Error("Failed to patch task status");
            }

            router.refresh();
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    return (
        <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleCheckboxChange}
            className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500 cursor-pointer accent-indigo-600 transition-colors"
        />
    );
}
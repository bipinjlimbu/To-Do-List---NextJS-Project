'use client';

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

interface UpdateFormProps {
    id: string;
    initialTodo: TypeToDo;
}

export default function UpdateForm({ id, initialTodo }: UpdateFormProps) {
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const title = formData.get("task") as string;
        const status = formData.get("status") as string;
        const completed = status === "completed";

        try {
            const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, completed }),
            });

            if (!response.ok) {
                throw new Error("Failed to update todo");
            }

            router.push("/");
            router.refresh();
        } catch (error) {
            console.error("Error updating todo:", error);
        }
    };

    return (
        <form className="p-6 space-y-5" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="task" className="block text-sm font-semibold text-slate-700 mb-2">
                    Task Description
                </label>
                <input
                    type="text"
                    id="task"
                    name="task"
                    defaultValue={initialTodo.title}
                    placeholder="Update your task description..."
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
                />
            </div>

            <div>
                <label htmlFor="status" className="block text-sm font-semibold text-slate-700 mb-2">
                    Task Status
                </label>
                <select
                    id="status"
                    name="status"
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm appearance-none"
                    defaultValue={initialTodo.completed ? "completed" : "pending"}
                >
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                </select>
            </div>

            <div className="flex items-center justify-end space-x-3 pt-4 border-t border-slate-100">
                <Link
                    href="/"
                    className="px-4 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors"
                >
                    Cancel
                </Link>
                <button
                    type="submit"
                    className="px-4 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 shadow-sm transition-colors"
                >
                    Save Changes
                </button>
            </div>
        </form>
    );
}
'use client';

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function UpdateTodo() {
    const params = useParams();
    const router = useRouter();
    const id = params.id;

    const [todo, setTodo] = useState<TypeToDo | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        fetch(`http://localhost:3000/api/todos/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setTodo(Array.isArray(data) ? data[0] : data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching todo:", error);
                setLoading(false);
            });
    }, [id]);

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

    if (loading) {
        return (
            <main className="min-h-[calc(100vh-130px)] bg-slate-50 flex items-center justify-center">
                <p className="text-slate-500 text-sm">Loading task details...</p>
            </main>
        );
    }

    if (!todo) {
        return (
            <main className="min-h-[calc(100vh-130px)] bg-slate-50 flex items-center justify-center">
                <p className="text-red-500 text-sm">Task not found.</p>
            </main>
        );
    }

    return (
        <main className="min-h-[calc(100vh-130px)] bg-slate-50 text-slate-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden">

                <div className="p-6 border-b border-slate-100 bg-white">
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Update Task</h1>
                    <p className="text-sm text-slate-500 mt-1">Modify the details or status of your existing task</p>
                </div>

                <form className="p-6 space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="task" className="block text-sm font-semibold text-slate-700 mb-2">
                            Task Description
                        </label>
                        <input
                            type="text"
                            id="task"
                            name="task"
                            defaultValue={todo.title}
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
                            defaultValue={todo.completed ? "completed" : "pending"}
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

            </div>
        </main>
    );
}
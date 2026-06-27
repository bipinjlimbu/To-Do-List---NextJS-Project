'use client';

import Link from "next/link";

export default function AddTodo() {

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const title = formData.get("task") as string;

        try {
            const response = await fetch("http://localhost:3000/api/todos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title }),
            });

            if (response.ok) {
                window.location.href = "/";
            }
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    };

    return (
        <main className="min-h-[calc(100vh-130px)] bg-slate-50 text-slate-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden">

                <div className="p-6 border-b border-slate-100 bg-white">
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Add New Task</h1>
                    <p className="text-sm text-slate-500 mt-1">Create a new task to add to your daily list</p>
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
                            placeholder="e.g., Learn Next.js Server Components"
                            className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
                        />
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
                            Add Task
                        </button>
                    </div>
                </form>

            </div >
        </main >
    );
}
'use client';

import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: number }) {
    const router = useRouter();

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Failed to delete todo");
            }

            router.refresh();
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };

    return (
        <button
            onClick={handleDelete}
            className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-100"
            title="Delete Task"
        >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
        </button>
    );
}
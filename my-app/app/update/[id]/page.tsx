import UpdateForm from "@/components/UpdateForm";
import { notFound } from "next/navigation";

export default async function UpdateTodo({ params }: PageProps<"/update/[id]">) {
    const { id } = await params;

    const res = await fetch(`http://localhost:3000/api/todos/${id}`);

    if (!res.ok) {
        notFound();
    }

    const data = await res.json();
    const todo: TypeToDo = Array.isArray(data) ? data[0] : data;

    return (
        <main className="min-h-[calc(100vh-130px)] bg-slate-50 text-slate-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden">

                <div className="p-6 border-b border-slate-100 bg-white">
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Update Task</h1>
                    <p className="text-sm text-slate-500 mt-1">Modify the details or status of your existing task</p>
                </div>

                <UpdateForm id={id} initialTodo={todo} />

            </div>
        </main>
    );
}
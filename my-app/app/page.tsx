import Link from "next/link";

export default async function Home() {
  const todos = await fetch("http://localhost:3000/api/todos").then((res) => res.json());

  return (
    <main className="min-h-[calc(100vh-130px)] bg-slate-50 text-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden">

        <div className="p-6 border-b border-slate-100 bg-white sm:flex sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Task Master Matrix</h1>
            <p className="text-sm text-slate-500 mt-1">Manage, update, and track all your active task metrics</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/70 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <th className="py-4 px-6 w-16 text-center">Status</th>
                <th className="py-4 px-6">Task Description</th>
                <th className="py-4 px-6 w-32 text-center">State</th>
                <th className="py-4 px-6 w-32 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {todos.map((todo: TypeToDo) => (
                <tr
                  key={todo.id}
                  className={`group transition-colors duration-150 ${todo.completed ? "bg-slate-50/40 text-slate-400" : "bg-white text-slate-700 hover:bg-slate-50/50"
                    }`}
                >
                  <td className="py-4 px-6 text-center">
                    <div className="inline-flex items-center justify-center">
                      {todo.completed ? (
                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-slate-300 group-hover:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                        </svg>
                      )}
                    </div>
                  </td>

                  <td className="py-4 px-6 font-medium">
                    <span className={todo.completed ? "line-through text-slate-400" : "text-slate-800"}>
                      {todo.title}
                    </span>
                  </td>

                  <td className="py-4 px-6 text-center whitespace-nowrap">
                    {todo.completed ? (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                        Completed
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
                        Pending
                      </span>
                    )}
                  </td>

                  <td className="py-4 px-6 text-center whitespace-nowrap">
                    <div className="flex items-center justify-center space-x-2">
                      <Link
                        href={`/update/${todo.id}`}
                        className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors border border-transparent hover:border-indigo-100"
                        title="Update Task"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </Link>

                      <button
                        className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-100"
                        title="Delete Task"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
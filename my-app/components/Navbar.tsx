import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="h-16 bg-white border-b border-slate-200 sticky top-0 z-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto h-full flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span className="font-bold text-xl text-slate-900 tracking-tight">ToDo App</span>
                </Link>
                <div className="flex items-center space-x-1">
                    <Link href="/add/" className="px-3 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg">
                        Add Task
                    </Link>
                </div>
            </div>
        </nav>
    );
}
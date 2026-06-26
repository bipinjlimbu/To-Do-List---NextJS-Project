export default function Footer() {
    return (
        <footer className="h-16 bg-white border-t border-slate-200 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto h-full flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2 sm:gap-0">
                <div>
                    &copy; {new Date().getFullYear()} ToDo App. All rights reserved.
                </div>
                <div className="flex items-center space-x-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">
                        v1.0.0
                    </span>
                </div>
            </div>
        </footer>
    );
}
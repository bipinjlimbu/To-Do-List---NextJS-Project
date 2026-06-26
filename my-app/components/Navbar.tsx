export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white py-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="text-xl font-bold">My App</div>
                    <ul className="flex space-x-4">
                        <li><a href="/" className="hover:text-gray-300">Home</a></li>
                        <li><a href="/about" className="hover:text-gray-300">About</a></li>
                        <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
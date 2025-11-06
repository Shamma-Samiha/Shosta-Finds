import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-extrabold text-primary dark:text-accent">
          Shosta Finds
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-slate-900 dark:text-slate-200 font-medium">
            <Link to="/" className="hover:text-primary dark:hover:text-accent">Home</Link>
            <Link to="/men" className="hover:text-primary dark:hover:text-accent">Men</Link>
            <Link to="/women" className="hover:text-primary dark:hover:text-accent">Women</Link>
            <Link to="/kids" className="hover:text-primary dark:hover:text-accent">Kids</Link>
            <Link to="/plants" className="hover:text-primary dark:hover:text-accent">Plants</Link>
            <Link to="/home-decor" className="hover:text-primary dark:hover:text-accent">Home Décor</Link>
          </div>

          <div className="hidden md:flex ml-4">
            <Link to="/login" className="px-4 py-2 rounded border border-primary text-primary hover:bg-primary hover:text-white transition font-semibold">
              Login / Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-cyan-400">Spartan Group</h1>
      <div className="space-x-4">
        <Link to="/" className="text-white hover:text-cyan-400">Home</Link>
        <Link to="/projects" className="text-white hover:text-cyan-400">Projects</Link>
        <Link to="/articles" className="text-white hover:text-cyan-400">Articles</Link>
      </div>
    </nav>
  );
}

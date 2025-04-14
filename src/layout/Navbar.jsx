// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-semibold tracking-widest text-cyan-400">
        SPARTAN GROUP
      </div>
      <ul className="flex gap-6 text-sm font-medium">
        <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">Home</li>
        <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">Projects</li>
        <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">Articles</li>
        <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">About</li>
      </ul>
    </nav>
  );
}


import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 text-center">
      <h2>ALX Next.js Setup Project</h2>
      <nav className="mt-2">
        <ul className="flex justify-center space-x-4">
          <li><a href="/home" className="text-white hover:underline">Home</a></li>
          <li><a href="/about" className="text-white hover:underline">About</a></li>
         </ul>
      </nav>
    </header>
  );
};

export default Header;


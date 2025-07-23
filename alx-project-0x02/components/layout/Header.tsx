
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="flex justify-center space-x-6">
        <Link href="/home" className="hover:text-yellow-400">Home</Link>
        <Link href="/about" className="hover:text-yellow-400">About</Link>
        <Link href="/posts" className="hover:text-yellow-400">Posts</Link>
      </nav>
    </header>
  );
};

export default Header;

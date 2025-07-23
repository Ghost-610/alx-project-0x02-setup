import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt?: string;
}

const Card: React.FC<CardProps> = ({ title, content, imageSrc, imageAlt }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-sm mx-auto">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 align-text-center">{title}</h3>
      <p className="mt-2 text-gray-600 ">{content}</p>
      <Link
        href="/details"
        className="text-blue-500 hover:underline mt-4 inline-block"
      >
        Read more
      </Link>
    </div>
  );
};

export default Card;

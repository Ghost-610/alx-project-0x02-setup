import React from 'react';
import Link from 'next/link';
import IMG from 'next/image';
interface CardProps {
  title: string;
  content: string;
}

const Card:React.FC<CardProps>=({title, content})=> {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2">{content}</p>
      <Link href="/details" className="text-blue-500 hover:underline mt-4 inline-block">
        Read more
      </Link>
            <img src="/assets/images/IMG.jpg" alt="Card-image" className="w-100 h-120" />

    </div>
  );
}
export default Card;

// Usage example
// <Card title="Card Title" content="This is the content of the card." />
// This component can be used in any page or component where you want to display a card. 
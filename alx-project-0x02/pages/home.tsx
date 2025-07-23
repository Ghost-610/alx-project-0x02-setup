import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from "@/components/common/Card";
import PostModal from '@/components/common/PostModal'; // ✅ Already imported
import Link from 'next/link';

// ✅ Define the card structure
interface CardData {
  title: string;
  content: string;
}

const Home: React.FC = () => {
  // ✅ Modal open/close state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ Cards created by the user
  const [cards, setCards] = useState<CardData[]>([]);

  // ✅ Function to handle form submission from the modal
  const handleAddCard = (newCard: CardData) => {
    setCards([...cards, newCard]);
    setIsModalOpen(false); // Close modal after adding
  };

  return (
    <div>
      <Header />
      <h1 className="text-center text-4xl font-bold text-yellow-700 my-8">
        Welcome Page
      </h1>
      <p className="text-center text-lg text-gray-600 mb-4">
        This is the home page of the ALX project 0x02-setup.
        <br />
        The project is designed to help you set up your development environment.
      </p>
      <hr />
     

      <br />

      {/* ✅ Static Cards */}
      <div>
        <Card
          title="Card Title"
          content="This is the content of the card."
        />
        <br />
        <Card
          title="Card Title"
          content="This is the content of the card."
        />
        <br />
        <Card
          title="Card Title"
          content="This is the content of the card."
        />
      </div>

      {/* ✅ Button to open modal */}
      <div className="text-center mt-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add New Card
        </button>
      </div>

      {/* ✅ Display dynamically added cards */}
      <div className="mt-8 space-y-4">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>

      {/* ✅ Modal Component */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddCard}
      />
      <div className="text-center mt-8">
        <Link href="/about" className="text-blue-500 hover:underline">
          Learn more about this project
        </Link>
      </div>
      </div>
  );
};

export default Home;

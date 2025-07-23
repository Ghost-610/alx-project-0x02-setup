// components/common/PostCard.tsx
import React from 'react';

interface PostCardProps {
  title: string;
  content: string;
  userId: number;
}

const PostCard: React.FC<PostCardProps> = ({ title, content, userId }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-pink-950 mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-white mb-2">{content}</p>
      <p className="text-sm text-black">Posted by User {userId}</p>
    </div>
  );
};

export default PostCard;

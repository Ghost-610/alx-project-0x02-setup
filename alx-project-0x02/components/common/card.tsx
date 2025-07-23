import React from 'react';
import {  type CardProps } from '@/interfaces';


const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-sm mx-auto">
     <h1>{title}</h1>
     <p>{content}</p>
    </div>
  );
};

export default Card;

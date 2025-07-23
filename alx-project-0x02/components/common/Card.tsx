// import React from 'react';
// import {type CardProps} from'@/interfaces';

// const Card: React.FC<CardProps> = ({ title, content }) => {
//   return (
//     <div className="bg-blue-400 shadow-md rounded-lg p-4 max-w-sm mx-auto">
//      <h1>{title}</h1>
//      <p>{content}</p>
//     </div>
//   );
// };
// export default Card;

import React from 'react';

// Define CardProps interface directly in the file
interface CardProps {
  title?: string;
  content?: string;
  children?: React.ReactNode;
  className?: string;
  // [key: string]: any; // Allow additional props for flexibility
}

const Card: React.FC<CardProps> = ({ title, content, children, className, ...props}) => {
  return (
    <div 
      className={`bg-blue-400 shadow-md rounded-lg p-4 max-w-sm mx-auto ${className || ''}`}
      {...props}
    >
      {title && <h1 className="text-lg font-semibold mb-2">{title}</h1>}
      {content && <p className="text-gray-700">{content}</p>}
      {children}
    </div>
  );
};

export default Card;

// Also export the interface for reuse
export type { CardProps };
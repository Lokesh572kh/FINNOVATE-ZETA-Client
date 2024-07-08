// Card.js
import React from 'react';

const Card = ({ title, intro,slug }) => {
  return (
    <div className="max-w-sm px-10 rounded overflow-hidden shadow-lg bg-white m-4">
      <a href={`/${slug}`} className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {intro}
        </p>
      </a>
    </div>
  );
};

export default Card;

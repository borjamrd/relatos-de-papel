import React from 'react';
import { Book } from '../../data/mockBooks'; // Importa la interfaz Book

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={book.image} alt={book.title} />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">{book.title}</h3>
        <p className="text-sm text-gray-600 truncate">Autor: {book.author}</p>
        <p className="text-sm text-gray-700 mt-2">${book.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default BookCard;
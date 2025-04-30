import React from 'react';
import { CartItem as CartItemType } from '../../context/CartContext'; 
interface CartItemProps {
  item: CartItemType;
  onRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
  return (
    <div className="flex items-center space-x-4">
      <img
        src={item.image || 'https://via.placeholder.com/75'} 
        alt={item.title}
        className="w-16 h-16 object-cover rounded"
      />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-sm text-gray-600">Cantidad: {item.quantity}</p>
        <p className="text-sm text-gray-700">${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700 focus:outline-none"
      >
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;
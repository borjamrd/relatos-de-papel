
import { Book } from '@/lib/data';
import React, { createContext, ReactNode, useReducer } from 'react';
import { toast } from "sonner";


type CartItem = {
  book: Book;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  totalItems: number;
};

type CartAction =
  | { type: 'ADD_ITEM'; book: Book }
  | { type: 'REMOVE_ITEM'; bookId: number }
  | { type: 'UPDATE_QUANTITY'; bookId: number; quantity: number }
  | { type: 'CLEAR_CART' };

export type CartContextType = {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  addToCart: (book: Book) => void;
  removeFromCart: (bookId: number) => void;
  updateQuantity: (bookId: number, quantity: number) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

const initialState: CartState = {
  items: [],
  totalItems: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(item => item.book.id === action.book.id);
      
      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        
        return {
          items: updatedItems,
          totalItems: state.totalItems + 1,
        };
      } else {
        return {
          items: [...state.items, { book: action.book, quantity: 1 }],
          totalItems: state.totalItems + 1,
        };
      }
    }
    
    case 'REMOVE_ITEM': {
      const existingItem = state.items.find(item => item.book.id === action.bookId);
      if (!existingItem) return state;
      
      const updatedItems = state.items.filter(item => item.book.id !== action.bookId);
      
      return {
        items: updatedItems,
        totalItems: state.totalItems - existingItem.quantity,
      };
    }
    
    case 'UPDATE_QUANTITY': {
      const existingItemIndex = state.items.findIndex(item => item.book.id === action.bookId);
      
      if (existingItemIndex === -1) return state;
      
      const oldQuantity = state.items[existingItemIndex].quantity;
      const newQuantity = action.quantity;
      
      if (newQuantity <= 0) {
        return {
          items: state.items.filter(item => item.book.id !== action.bookId),
          totalItems: state.totalItems - oldQuantity,
        };
      }
      
      const updatedItems = [...state.items];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        quantity: newQuantity,
      };
      
      return {
        items: updatedItems,
        totalItems: state.totalItems + (newQuantity - oldQuantity),
      };
    }
    
    case 'CLEAR_CART':
      return initialState;
    
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  const addToCart = (book: Book) => {
    dispatch({ type: 'ADD_ITEM', book });
    toast(`"${book.title}" añadido al carrito`);
  };
  
  const removeFromCart = (bookId: number) => {
    dispatch({ type: 'REMOVE_ITEM', bookId });
  };
  
  const updateQuantity = (bookId: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', bookId, quantity });
  };
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  
  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

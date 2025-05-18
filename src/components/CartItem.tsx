import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { CartItem } from "@/contexts/CartContext";
import { Trash2 } from "lucide-react";

interface CartItemProps {
  item: CartItem;
  onQuantityChange: (bookId: number, quantity: string) => void;
  onRemoveItem: (bookId: number) => void;
}

const CartItem = ({ item, onQuantityChange, onRemoveItem }: CartItemProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border border-cream-200 rounded-lg bg-white relative">
      <div className="w-20 h-30 flex-shrink-0 overflow-hidden rounded bg-cream-100">
        <img
          src={`${item.book.coverImage}?auto=format&fit=crop&w=80&h=120`}
          alt={item.book.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex-grow">
        <h3 className="font-serif font-medium text-lg">{item.book.title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{item.book.author}</p>
        <p className="font-serif font-semibold text-accent-foreground">
          ${item.book.price.toFixed(2)}
        </p>
      </div>

      <div className="flex items-center gap-4 flex-shrink-0 mt-4 sm:mt-0">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground hidden sm:inline">
            Cant:
          </span>
          <Input
            type="number"
            min="0"
            value={item.quantity}
            onChange={(e) => onQuantityChange(item.book.id, e.target.value)}
            onBlur={(e) => {
              const value = parseInt(e.target.value);
              if (isNaN(value) || value <= 0) {
                onRemoveItem(item.book.id);
              }
            }}
            className="w-16 h-8 border-cream-300 focus:ring-accent"
          />
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onRemoveItem(item.book.id)}
          className="text-destructive hover:bg-red-100 h-8 w-8"
          aria-label="Eliminar item"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      <div className="absolute bottom-4 right-4 sm:static sm:ml-auto sm:pl-4 text-right flex-shrink-0">
        <p className="text-sm text-muted-foreground">Total</p>
        <p className="font-semibold">
          ${(item.book.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;

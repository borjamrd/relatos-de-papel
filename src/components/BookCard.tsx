import { useNavigate } from "react-router-dom";
import { Book } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleCardClick = () => {
    navigate(`/book/${book.id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(book);
  };

  return (
    <div
      className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
      onClick={handleCardClick}
    >
      <div className="aspect-[2/3] overflow-hidden bg-cream-100">
        <img
          src={`${book.coverImage}?auto=format&fit=crop&w=300&h=450`}
          alt={book.title}
          className="h-full w-full object-cover transition-all hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg font-medium truncate">
          {book.title}
        </h3>
        <p className="text-sm text-muted-foreground">{book.author}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-medium text-accent-foreground">
            ${book.price.toFixed(2)}
          </span>
          <Badge className="bg-accent text-accent-foreground border-0">
            {book.category}
          </Badge>
        </div>
      </div>
      <div className="flex justify-between p-4 pt-0 px-6">
        <div className="text-xs text-muted-foreground pt-1">
          <span>{book.pages} páginas</span>
        </div>
        <Button
          size="sm"
          className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs py-1 h-auto"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-3 w-3 mr-1" />
          Añadir
        </Button>
      </div>
    </div>
  );
};

export default BookCard;

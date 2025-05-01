import { useState, KeyboardEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Search, ShoppingCart, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { mockBooks } from "@/lib/data";
import { useCart } from "@/hooks/useCart";

interface NavbarProps {
  onSearch?: (query: string) => void;
}

const Navbar = ({ onSearch }: NavbarProps ) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { state: cartState } = useCart();

  const categories = [...new Set(mockBooks.map((book) => book.category))];

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      onSearch?.(searchQuery);
      navigate("/collection");
    }
  };

  const handleCategorySelect = (category: string) => {
    onSearch?.(category);
    navigate("/collection");
  };

  return (
    <nav className="bg-cream-200 shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-serif font-bold text-accent-foreground">
                Relatos de papel
              </span>
            </Link>
          </div>

          <div className="flex flex-1 max-w-xl mx-4 items-center">
            <div className="mr-2">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-accent-foreground hover:text-primary transition-colors px-3 py-2 rounded-md border border-cream-300">
                  Categorías <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-cream-50 border border-cream-300">
                  <DropdownMenuItem
                    className="cursor-pointer hover:bg-cream-100"
                    onClick={() => onSearch?.("")}
                  >
                    Todas
                  </DropdownMenuItem>
                  {categories.map((category) => (
                    <DropdownMenuItem
                      key={category}
                      className="cursor-pointer hover:bg-cream-100"
                      onClick={() => handleCategorySelect(category)}
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Buscar libros..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                className="pl-10 py-2 bg-cream-50 border-cream-300 focus:ring-accent focus:border-accent text-sm w-full"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/carrito"
              className="relative text-accent-foreground hover:text-primary transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartState.totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartState.totalItems}
                </span>
              )}
            </Link>

            <div className="hidden md:flex items-center space-x-3">
              <Button
                variant="ghost"
                className="text-accent-foreground hover:text-primary hover:bg-cream-100 transition-colors"
                onClick={() => navigate("/login")}
              >
                Inicia sesión
              </Button>
              <Button
                variant="default"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => navigate("/register")}
              >
                Regístrate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

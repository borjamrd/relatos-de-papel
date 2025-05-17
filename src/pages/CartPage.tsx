import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/useCart";
import { ArrowLeft, Trash2 } from "lucide-react";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const CartPage = () => {
  const navigate = useNavigate();
  const { state, removeFromCart, updateQuantity, clearCart } = useCart();
  const { items: cartItems } = state;

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate("/checkout");
    }
  };

  const handleQuantityChange = (bookId: number, newQuantityString: string) => {
    const newQuantity = parseInt(newQuantityString);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      updateQuantity(bookId, newQuantity);
    } else if (!isNaN(newQuantity) && newQuantity <= 0) {
      removeFromCart(bookId);
    }
  };

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return total + item.book.price * item.quantity;
    }, 0);
  }, [cartItems]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onSearch={(query) => navigate(`/?q=${query}`)} />

      <main className="flex-grow page-container">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-4 flex items-center gap-2 hover:bg-cream-200"
          >
            <ArrowLeft className="h-4 w-4" /> Volver
          </Button>
        </div>

        <Card className="border-cream-300 bg-cream-50 shadow-md">
          <CardHeader>
            <CardTitle className="text-3xl font-serif font-bold">
              Carrito de Compras
            </CardTitle>
          </CardHeader>
          <CardContent>
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg mb-4">
                  Tu carrito está vacío.
                </p>
                <Button
                  onClick={() => navigate("/")}
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Seguir comprando
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.book.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border border-cream-200 rounded-lg bg-white relative"
                  >
                    <div className="w-20 h-30 flex-shrink-0 overflow-hidden rounded bg-cream-100">
                      <img
                        src={`${item.book.coverImage}?auto=format&fit=crop&w=80&h=120`}
                        alt={item.book.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex-grow">
                      <h3 className="font-serif font-medium text-lg">
                        {item.book.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.book.author}
                      </p>
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
                          onChange={(e) =>
                            handleQuantityChange(item.book.id, e.target.value)
                          }
                          onBlur={(e) => {
                            const value = parseInt(e.target.value);
                            if (isNaN(value) || value <= 0) {
                              removeFromCart(item.book.id);
                            }
                          }}
                          className="w-16 h-8 border-cream-300 focus:ring-accent"
                        />
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.book.id)}
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
                ))}

                <Separator className="my-6 bg-cream-300" />

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <Button
                    variant="outline"
                    onClick={clearCart}
                    className="border-destructive text-destructive hover:bg-destructive/10"
                  >
                    Vaciar Carrito
                  </Button>
                  <div className="text-right w-full sm:w-auto">
                    <p className="text-lg font-semibold font-serif mb-2">
                      Total General: ${totalPrice.toFixed(2)}
                    </p>
                    <Button
                      size="lg"
                      onClick={handleCheckout}
                      className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90"
                      disabled={cartItems.length === 0}
                    >
                      Proceder al Pago
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default CartPage;

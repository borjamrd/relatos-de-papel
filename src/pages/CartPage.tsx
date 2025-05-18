import CartItem from "@/components/CartItem";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/useCart";
import { ArrowLeft } from "lucide-react";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

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
                  <CartItem
                    item={item}
                    onQuantityChange={handleQuantityChange}
                    onRemoveItem={handleCheckout}
                  />
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

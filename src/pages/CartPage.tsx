import { useNavigate } from 'react-router-dom';
import CartItem from '../components/cart/CartItem';
import { useCart } from '../hooks/useCart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; 

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-8 text-center">
        El carrito está vacío.
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Carrito de Compras</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="mb-4 border-b pb-4">
                <CartItem item={item} onRemove={removeFromCart} />
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-6">
            <Button variant="destructive" onClick={clearCart}>
              Vaciar Carrito
            </Button>
            <Button variant="default" onClick={handleCheckout}>
              Proceder al Checkout
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CartPage;
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert } from '@/components/ui/alert';

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const handlePayment = () => {
    alert('¡Pedido realizado con éxito!');
    clearCart();
    navigate('/');
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-8 text-center">
        <Alert variant="default">El carrito está vacío.</Alert>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Resumen de tu Pedido</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>{item.title}</span>
                <span>{item.price}€</span>
              </li>
            ))}
          </ul>
          <Button
            className="mt-4 w-full"
            onClick={handlePayment}
          >
            Pagar
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckoutPage;
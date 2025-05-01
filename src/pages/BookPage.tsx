import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/useCart";
import { Book, mockBooks } from "@/lib/data";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    const bookId = parseInt(id || "0");
    const foundBook = mockBooks.find((b) => b.id === bookId);

    if (foundBook) {
      setBook(foundBook);
    } else {
      navigate("/not-found");
    }
  }, [id, navigate]);

  if (!book) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-medium mb-4">Cargando...</h2>
        </div>
      </div>
    );
  }

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          <div className="md:col-span-1">
            <div className="aspect-[2/3] overflow-hidden bg-cream-100 rounded-lg shadow-md border border-cream-300">
              <img
                src={`${book.coverImage}?auto=format&fit=crop&w=500&h=750`}
                alt={book.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-6 bg-cream-50 p-4 rounded-lg border border-cream-300">
              <h3 className="font-serif text-lg font-medium mb-2">Detalles</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Páginas:</span>
                  <span>{book.pages}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Categoría:</span>
                  <Badge className="bg-accent text-accent-foreground border-0">
                    {book.category}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Envío a domicilio:
                  </span>
                  <span>
                    {book.homeDelivery ? "Disponible" : "No disponible"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Formato digital:
                  </span>
                  <span>
                    {book.onlineFormat ? "Disponible" : "No disponible"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h1 className="font-serif text-3xl font-bold mb-2">{book.title}</h1>
            <p className="text-lg text-muted-foreground mb-4">{book.author}</p>

            <div className="flex items-center space-x-2 mb-6">
              <span className="font-serif text-2xl font-medium text-accent-foreground">
                ${book.price.toFixed(2)}
              </span>
              <Button
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => addToCart(book)}
              >
                Agregar al carrito
              </Button>
            </div>

            <Separator className="my-6 bg-cream-300" />

            <div className="mb-8">
              <h2 className="font-serif text-xl font-medium mb-3">Sinopsis</h2>
              <p className="text-muted-foreground leading-relaxed">
                {book.synopsis}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-medium mb-3">Reseñas</h2>
              {book.reviews.length === 0 ? (
                <p className="text-muted-foreground">
                  No hay reseñas disponibles.
                </p>
              ) : (
                <div className="space-y-4">
                  {book.reviews.map((review, index) => (
                    <Card key={index} className="border-cream-300 bg-cream-50">
                      <CardContent className="p-4">
                        <p className="font-medium mb-2">{review.name}</p>
                        <p className="text-muted-foreground text-sm">
                          {review.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-cream-200 text-center py-6 mt-12">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Biblioteca - Todos los derechos
          reservados
        </p>
      </footer>
    </div>
  );
};

export default BookDetail;

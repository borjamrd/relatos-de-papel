import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookDetailsComponent from "../components/book/BookDetails";
import { useCart } from "../hooks/useCart";


interface Author {
  author: {
    key: string;
    name: string;
  };
  type: {
    key: string;
  };
}

interface BookDetails {
  title: string;
  authors?: Author[];
  description?: string | { value: string };
  covers?: number[];
}

const BookPage = () => {
  const [bookDetails, setBookDetails] = useState<BookDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { bookId } = useParams<{ bookId: string | undefined }>();
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchBookDetails = async (id: string | undefined) => {
      if (!id) return;
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://openlibrary.org/works/${id}.json`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: BookDetails = await response.json();
        setBookDetails(data);
      } catch (error: any) {
        setError(error.message);
        setBookDetails(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails(bookId);
  }, [bookId]);

  const handleAddToCart = () => {
    if (bookDetails && bookId) {
      addToCart({
        id: bookId,
        title: bookDetails.title,
        author: bookDetails.authors?.[0]?.author?.name || "Unknown",
        description:
          typeof bookDetails.description === "string"
            ? bookDetails.description
            : bookDetails.description?.value,
        image: bookDetails.covers?.[0]
          ? `https://covers.openlibrary.org/b/id/${bookDetails.covers[0]}-M.jpg`
          : "https://via.placeholder.com/150?text=No+Cover",
        price: 0, // La API no proporciona el precio directamente
      });
      alert(`${bookDetails.title} ha sido añadido al carrito.`);
    }
  };

  if (loading) {
    return <div>Cargando detalles del libro...</div>;
  }

  if (error) {
    return (
      <div className="text-red-500">
        Error al cargar los detalles del libro: {error}
      </div>
    );
  }

  if (!bookDetails) {
    return <div>No se encontraron detalles para este libro.</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-lg mx-auto">
        <div className="p-6">
          <BookDetailsComponent
            title={bookDetails.title}
            authors={bookDetails.authors}
            description={bookDetails.description}
            covers={bookDetails.covers}
            handleAddToCart={handleAddToCart}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default BookPage;

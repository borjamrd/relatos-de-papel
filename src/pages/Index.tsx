import { useState, useEffect } from "react";
import { useBooks } from "@/hooks/useBooks";
import { Book } from "@/lib/data";
import Navbar from "@/components/Navbar";
import BookCard from "@/components/BookCard";
import Pagination from "@/components/Pagination";

const BOOKS_PER_PAGE = 10;

const Index = () => {
  const { books, loading, error } = useBooks();
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [displayedBooks, setDisplayedBooks] = useState<Book[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const totalPages = Math.ceil(filteredBooks.length / BOOKS_PER_PAGE);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;
    const endIndex = startIndex + BOOKS_PER_PAGE;
    setDisplayedBooks(filteredBooks.slice(startIndex, endIndex));
  }, [currentPage, filteredBooks]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const lowercaseQuery = query.toLowerCase();

    const filtered = books.filter((book) =>
        book.title.toLowerCase().includes(lowercaseQuery) ||
        book.author.toLowerCase().includes(lowercaseQuery) ||
        book.category.toLowerCase().includes(lowercaseQuery)
    );

    setFilteredBooks(filtered);
    setCurrentPage(1);
  };

  return (
      <div className="min-h-screen flex flex-col">
        <Navbar onSearch={handleSearch} />

        <main className="flex-grow page-container">
          <div className="mb-8">
            <h1 className="font-serif text-3xl font-bold text-primary mb-2">
              Nuestra Colección
            </h1>
            {searchQuery && (
                <p className="text-muted-foreground">
                  {filteredBooks.length} resultados para "{searchQuery}"
                </p>
            )}
            {!searchQuery && (
                <p className="text-muted-foreground">
                  Descubre nuestros libros cuidadosamente seleccionados
                </p>
            )}
          </div>

          {loading ? (
              <div className="text-center py-20">Cargando libros...</div>
          ) : error ? (
              <div className="text-center py-20 text-red-500">
                Error al cargar los libros: {error}
              </div>
          ) : filteredBooks.length === 0 ? (
              <div className="text-center py-20">
                <h2 className="text-2xl font-serif font-medium mb-4">
                  No se encontraron resultados
                </h2>
                <p className="text-muted-foreground">
                  Intenta con otra búsqueda o explora nuestra colección completa
                </p>
                <button
                    onClick={() => {
                      setSearchQuery("");
                      setFilteredBooks(books);
                    }}
                    className="mt-4 px-4 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/80 transition-colors"
                >
                  Ver todos los libros
                </button>
              </div>
          ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 animate-fade-in">
                  {displayedBooks.map((book) => (
                      <BookCard key={book.id} book={book} />
                  ))}
                </div>

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
              </>
          )}
        </main>

        <footer className="bg-cream-200 text-center py-6">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Relatos de papel - Todos los derechos reservados
          </p>
        </footer>
      </div>
  );
};

export default Index;
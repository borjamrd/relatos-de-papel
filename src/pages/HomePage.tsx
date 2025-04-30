import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import BookCard from "@/components/book/BookCard";
import { Button } from "@/components/ui/button";
import SearchBar from "../components/search/SearchBar";

interface ApiBook {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
}

interface ApiResponse {
  docs: ApiBook[];
  numFound: number;
  start: number;
}

const ITEMS_PER_PAGE = 10;
const SEARCH_DELAY = 300;

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<ApiBook[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalResults, setTotalResults] = useState<number>(0);

  const fetchBooks = useCallback(
    async (query: string, page: number, sort?: string) => {
      setLoading(true);
      setError(null);
      const offset = (page - 1) * ITEMS_PER_PAGE;
      let url = `https://openlibrary.org/search.json?q=${query}&limit=${ITEMS_PER_PAGE}&offset=${offset}`;
      if (sort) {
        url += `&sort=${sort}`;
      }
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: ApiResponse = await response.json();
        setSearchResults(data.docs);
        setTotalResults(data.numFound);
      } catch (e: any) {
        setError(e.message);
        setSearchResults([]);
        setTotalResults(0);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1); 
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    fetchBooks("books", 1);
  }, [fetchBooks]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, SEARCH_DELAY);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchBooks(debouncedSearchTerm, currentPage);
    } else if (currentPage > 1) {
      fetchBooks("books", currentPage);
    }
  }, [debouncedSearchTerm, currentPage, fetchBooks]);

  const totalPages = Math.ceil(totalResults / ITEMS_PER_PAGE);
  const hasNextPage = currentPage < totalPages;
  const hasPreviousPage = currentPage > 1;

  return (
    <div className="container mx-auto py-8">
      <SearchBar onSearch={handleSearch} />

      {loading && <div>Cargando libros...</div>}
      {error && (
        <div className="text-red-500">Error al cargar los libros: {error}</div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {searchResults.map((book) => (
          <Link
            key={book.key}
            to={`/books/${
              book.key.startsWith("/works/")
                ? book.key.substring("/works/".length)
                : book.key
            }`}
          >
            <BookCard
              book={{
                id: book.key.startsWith("/works/")
                  ? book.key.substring("/works/".length)
                  : book.key,
                title: book.title,
                author: book.author_name
                  ? book.author_name[0]
                  : "Autor desconocido",
                image: book.cover_i
                  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                  : "https://via.placeholder.com/150?text=No+Cover",
                price: 0,
              }}
            />
          </Link>
        ))}
      </div>

      {searchResults.length === 0 &&
        !loading &&
        debouncedSearchTerm &&
        !error && (
          <div className="mt-4 text-gray-500">
            No se encontraron libros para "{debouncedSearchTerm}".
          </div>
        )}

      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {hasPreviousPage && (
            <Button onClick={() => handlePageChange(currentPage - 1)}>
              Anterior
            </Button>
          )}
          <span>
            Página {currentPage} de {totalPages}
          </span>
          {hasNextPage && (
            <Button onClick={() => handlePageChange(currentPage + 1)}>
              Siguiente
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;

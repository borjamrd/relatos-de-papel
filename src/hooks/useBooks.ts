import { useState, useEffect } from "react";
import { mockBooks, Book } from "@/lib/data";

export const useBooks = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        // Simula una llamada a una API con un retraso
        const timer = setTimeout(() => {
            try {
                setBooks(mockBooks);
            } catch (err: any) {
                setError("Error al obtener los libros");
            } finally {
                setLoading(false);
            }
        }, 3000); // 3 segundos de retraso

        return () => clearTimeout(timer);
    }, []);

    return { books, loading, error };
};
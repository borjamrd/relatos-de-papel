import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Author {
    author: {
        key: string;
        name: string;
    };
    type: {
        key: string;
    };
}

interface BookDetailsProps {
    title: string;
    authors?: Author[];
    description?: string | { value: string };
    covers?: number[];
    handleAddToCart: () => void;
    loading: boolean;
}

const BookDetails: React.FC<BookDetailsProps> = ({
    title,
    authors,
    description,
    covers,
    handleAddToCart,
    loading,
}) => {
    const bookDescription =
        typeof description === 'string' ? description : description?.value;

    return (
        <Card className="max-w-lg mx-auto">
            {covers && (
                <img
                    className="w-full h-48 object-cover"
                    src={`https://covers.openlibrary.org/b/id/${covers[0]}-M.jpg`}
                    alt={title}
                />
            )}
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                {authors && (
                    <p className="text-gray-600 mb-2">
                        Autor: {authors[0]?.author?.name || 'Unknown'}
                    </p>
                )}
                {bookDescription && <p className="text-gray-700 mb-4">{bookDescription}</p>}
                <Button onClick={handleAddToCart} disabled={loading}>
                    Añadir al carrito
                </Button>
            </CardContent>
        </Card>
    );
};

export default BookDetails;
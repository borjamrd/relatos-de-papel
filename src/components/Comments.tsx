import {useGetComments} from "@/hooks/useGetComments.ts";
import {useState, useEffect} from "react";
import {Card, CardContent} from "@/components/ui/card.tsx";
import AddComment from "@/components/AddComment.tsx";

interface CommentsProps {
    bookId: number;
}
interface ReviewInsert {
    name: string;
    description: string;
}

const Comments = ({ bookId }: CommentsProps) => {
    const initialComments = useGetComments(bookId); // custom hook
    const [comments, setComments] = useState<ReviewInsert[]>([]);

    useEffect(() => {
        setComments(initialComments);
    }, [initialComments]);

    const handleAddComment = (name: string, description: string) => {
        const newComment = { name, description };
        setComments((prev) => [...prev, newComment]); //añado el comentario del hijo a mi array de comentario
    }
    return (
        <div>
            <h2 className="font-serif text-xl font-medium mb-3">Reseñas</h2>
            {comments.length === 0 ? (
                <p className="text-muted-foreground">
                    No hay reseñas disponibles.
                </p>
            ) : (
                <div className="space-y-4">
                    {comments.map((review, index) => (
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
            <AddComment onAddComment={handleAddComment}/>
        </div>
    )
}
export default  Comments
import {useEffect, useState} from "react"
import {mockReviews, Review} from "@/lib/dataComment.ts"

export const useGetComments = (bookId: number) => {
    const [comments, setComment] = useState<Review[]>([]) //creo un estado para guardar los comentarios
    useEffect(() => {
      const filtered =  mockReviews.filter(review => review.bookId === bookId) //filtro por bookId
        setComment(filtered)
    },[bookId]) //actualizo solo cuando cambie mi bookId
    return comments
}
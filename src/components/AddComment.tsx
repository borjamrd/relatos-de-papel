import { useState } from "react"


interface AddCommentFormProps {
    onAddComment: (name: string, description: string) => void
}

const AddComment = ({ onAddComment }: AddCommentFormProps) => {
    const [name, setName] = useState("") //añado nombre temporal
    const [description, setDescription] = useState("") //añado estado temporal

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault() //cojo la data escrita en teclado
        if (!name || !description) return
        onAddComment(name, description) //ejecuto la funcion del padre
        setName("") //vuelvo a colocar name y description en blanco
        setDescription("")
    }

    return (
        <form onSubmit={handleSubmit} className="mt-6">
            <h3 className="font-serif text-lg mb-2">Añadir un Comentario</h3>
            <div className="mb-4">
                <label className="block text-sm font-medium text-muted-foreground">Nombre</label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-cream-300 p-2 bg-cream-50 rounded-md w-full"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-muted-foreground">Comentario</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border border-cream-300 p-2 bg-cream-50 rounded-md w-full"
                    rows={3}
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-accent text-accent-foreground hover:bg-accent/90 py-2 px-4 rounded-md"
            >
                Enviar Comentario
            </button>
        </form>
    )

}


export default AddComment


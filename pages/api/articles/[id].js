import { articles } from "../../../data";

export default function handler({ query: { id } }, response) {
    const filtered = articles.filter((article) => article.id === id);
    
    if (filtered.length > 0) {
        response.status(200).json(filtered[0])
    } else {
        response.status(404).json({ message: `article with id: ${id}, not found` })
    }
}

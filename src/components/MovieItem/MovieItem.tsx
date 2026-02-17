import type { Movie } from '../../types'

interface MovieItemProps {
  movie: Movie;
  onDelete: (id: number) => void;
}

export const MovieItem = ({ movie, onDelete }: MovieItemProps) => {
  return (
    <div className="movie-item">
      <span className="title">{movie.title}</span>
      <button onClick={() => onDelete(movie.id)} className="delete">✕</button>
    </div>
  )
}
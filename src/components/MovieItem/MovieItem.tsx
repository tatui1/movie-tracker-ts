import type { Movie } from '../../types'

interface MovieItemProps {
  movie: Movie
  onDelete: (id: number) => void
  onToggleWatched: (id: number) => void
}

export const MovieItem = ({ movie, onDelete, onToggleWatched }: MovieItemProps) => {
  return (
    <div className={`movie-item ${movie.watched ? 'watched' : ''}`}>
      <div className="movie-info">
        <input
          type="checkbox"
          checked={movie.watched}
          onChange={() => onToggleWatched(movie.id)}
        />
        <span className="title">{movie.title}</span>
      </div>
      <button onClick={() => onDelete(movie.id)} className="delete">✕</button>
    </div>
  )
}
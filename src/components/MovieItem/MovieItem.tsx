import type { Movie } from '../../types'
import { LikeDislike } from '../LikeDislike/LikeDislike'

interface MovieItemProps {
  movie: Movie;
  onDelete: (id: number) => void
  onToggleWatched: (id: number) => void
  onSetReaction: (id: number, reaction: 'like' | 'dislike') => void
}

export const MovieItem = ({ 
  movie, 
  onDelete, 
  onToggleWatched, 
  onSetReaction 
}: MovieItemProps) => {
  return (
    <div className={`movie-item ${movie.watched ? 'watched' : ''}`}>
      <div className="movie-info">
        <input
          type="checkbox"
          checked={movie.watched}
          onChange={() => onToggleWatched(movie.id)}/>
        <span className="title">{movie.title}</span>
      </div>
      
      <div className="movie-controls">
        {movie.watched && (
          <LikeDislike
            reaction={movie.reaction}
            onLike={() => onSetReaction(movie.id, 'like')}
            onDislike={() => onSetReaction(movie.id, 'dislike')}/>
        )}
        <button onClick={() => onDelete(movie.id)} className="delete">✕</button>
      </div>
    </div>
  )
}
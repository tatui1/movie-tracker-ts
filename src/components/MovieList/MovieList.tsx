import { MovieItem } from '../MovieItem/MovieItem'
import type { Movie } from '../../types'

interface MovieListProps {
  movies: Movie[];
  onDelete: (id: number) => void
  onToggleWatched: (id: number) => void
  onSetReaction: (id: number, reaction: 'like' | 'dislike') => void
}

export const MovieList = ({ 
  movies, 
  onDelete, 
  onToggleWatched, 
  onSetReaction 
}: MovieListProps) => {
  if (movies.length === 0) {
    return <p className="empty">Список фильмов пуст</p>
  }

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onDelete={onDelete}
          onToggleWatched={onToggleWatched}
          onSetReaction={onSetReaction}
        />
      ))}
    </div>
  )
}
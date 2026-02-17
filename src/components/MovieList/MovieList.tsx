import { MovieItem } from '../MovieItem/MovieItem'
import type { Movie } from '../../types'

interface MovieListProps {
  movies: Movie[];
  onDelete: (id: number) => void;
}

export const MovieList = ({ movies, onDelete }: MovieListProps) => {
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
        />
      ))}
    </div>
  )
}
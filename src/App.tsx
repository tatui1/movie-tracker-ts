import { useState } from 'react'
import { AddMovie } from './components/AddMovie/AddMovie'
import { MovieList } from './components/MovieList/MovieList'
import type { Movie } from './types'
import './App.css'

function App() {
  const [movies, setMovies] = useState<Movie[]>([])

  const addMovie = (title: string) => {
    const newMovie: Movie = {
      id: Date.now(),
      title,
      watched: false,
      reaction: null
    }
    setMovies([...movies, newMovie])
  }

  const deleteMovie = (id: number) => {
    setMovies(movies.filter(movie => movie.id !== id))
  }

  const toggleWatched = (id: number) => {
    setMovies(movies.map(movie =>
      movie.id === id
        ? { ...movie, watched: !movie.watched, reaction: null }
        : movie
    ))
  }

  const setReaction = (id: number, reaction: 'like' | 'dislike') => {
    setMovies(movies.map(movie =>
      movie.id === id
        ? { ...movie, reaction }
        : movie
    ))
  }

  return (
    <div className="app">
      <h1>Movie Tracker</h1>
      <AddMovie onAdd={addMovie} />
      <MovieList 
        movies={movies}
        onDelete={deleteMovie}
        onToggleWatched={toggleWatched}
        onSetReaction={setReaction}
      />
    </div>
  )
}

export default App
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

  return (
    <div className="app">
      <h1>Movie Tracker</h1>
      <AddMovie onAdd={addMovie} />
      <MovieList movies={movies} onDelete={deleteMovie} />
    </div>
  )
}

export default App
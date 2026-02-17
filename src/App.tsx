import { useState } from 'react'
import { AddMovie } from './components/AddMovie/AddMovie'
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
    setMovies([...movies, newMovie]);
  }

  return (
    <div className="app">
      <h1>Movie Tracker</h1>
      <AddMovie onAdd={addMovie} />
      <p>Фильмов в списке: {movies.length}</p>
    </div>
  )
}

export default App
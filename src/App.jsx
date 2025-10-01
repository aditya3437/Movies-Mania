import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import MoviesList from './MoviesList/MoviesList'

const App = () => {
  return (
    <div className='app'>
     <Navbar />
     <main>
     <MoviesList />
     </main>
    </div>
  )
}

export default App

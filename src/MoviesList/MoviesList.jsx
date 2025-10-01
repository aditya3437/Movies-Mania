import React, { useEffect, useState } from 'react';
import './MoviesList.css';
import { FaFire } from 'react-icons/fa';
import MoviesCard from './MoviesCard';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [searchQuery, setSearchQuery] = useState('guardians');
  const [inputValue, setInputValue] = useState('');

  const API_KEY = '959fe887';
  // const searchQuery = 'guardians';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `http://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}&page=${currentPage}`
        );
        const data = await res.json();
        if (data.Response === 'True') {
          setMovies(data.Search);
          setTotalResults(parseInt(data.totalResults));
        } else {
          setMovies([]);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchMovies();
  }, [searchQuery,currentPage]);

  const handleSearch =(e)=>{
    e.preventDefault();
    if(inputValue.trim() === '') {
      setSearchQuery(inputValue);
      setCurrentPage(1);
    }
  };

  return (
    <>
      <section className='movies_list'>
        <header className='movies_list_header'>
          <h2 className='movies_list_heading'>
            Popular <FaFire className='navbar_emoji' />
          </h2>
        </header>

        <form className='movies_list_fs' onSubmit={handleSearch}>
          <input type='text' className='movies_search' placeholder='Search...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button type='submit' className='movies_search_btn'>Search</button>
        </form>
      </section>

      <div className='movies_card'>
        {movies.map((movie) => (
          <MoviesCard
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            year={movie.Year}
          />
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === Math.ceil(totalResults / 10)}
        >
          Next
        </button>
      </div>

    </>
  );
};

export default MoviesList;

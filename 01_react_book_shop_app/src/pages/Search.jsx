import bgImg from '../assets/img/library.jpg';
import Card from '../components/Card';
import Loading from '../components/Loading';
import { useGlobalContext } from '../hook/useGlobalContext';
import { useEffect, useRef } from 'react';

const Search = () => {
  const { loading, searchedBooks, setSearch } = useGlobalContext();
  const inputRef = useRef();

  const searchBook = () => {
    setSearch(inputRef.current.value);
  };

  useEffect(() => inputRef.current.focus(), []);

  return (
    <section>
      <div
        className='relative bg-no-repeat bg-center h-[70vh] text-center'
        style={{ background: `url(${bgImg})` }}
      >
        <div className='absolute inset-0 w-full h-full bg-gray-900 bg-opacity-75 flex flex-col justify-center items-center p-4'>
          <h2 className='text-white font-semibold text-3xl capitalize mb-10'>
            search your book
          </h2>
          <div className='flex h-10 w-full sm:w-[550px] shrink'>
            <input
              id='searchBook'
              type='text'
              required
              className='w-full h-full  bg-gray-800 outline-0 focus:outline-none  border border-purple-500 text-white px-3 rounded-md caret-purple-500'
              placeholder='Search'
              ref={inputRef}
              onChange={searchBook}
            />
          </div>
        </div>
      </div>
      <div className='container m-auto text-center'>
        {loading ? (
          <Loading />
        ) : searchedBooks.length < 1 ? (
          <h2 className='text-white capitalize text-center text-lg font-semibold mt-4'>
            Sorry! there is a problem.
          </h2>
        ) : (
          <div className='pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {searchedBooks.map((book) => (
              <Card
                key={book.id}
                {...book}
                imgH={'h-36 m-auto'}
                cardView={'w-64'}
                contP={'pt-2'}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Search;

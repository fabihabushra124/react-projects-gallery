import Card from './Card';
import { IoStar } from 'react-icons/io5';
import { useGlobalContext } from '../hook/useGlobalContext';
import Loading from './Loading';

const Popular = () => {
  const { loading, popularBooks } = useGlobalContext();

  return (
    <section className='py-16 b-line' id='popular'>
      <div className='m-auto px-4 container text-center'>
        <div className='sub-h-box'>
          <h2 className='sub-h'>popular</h2>
        </div>
        {loading ? (
          <Loading />
        ) : popularBooks.length < 1 ? (
          <h2 className='text-white capitalize text-center text-lg font-semibold mt-4'>
            Sorry! there is a problem.
          </h2>
        ) : (
          <div className='pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {popularBooks.map((book) => (
              <Card
                key={book.id}
                {...book}
                imgH={'h-36 m-auto'}
                cardView={'w-64'}
                contP={'pt-2'}
              >
                {[...Array(5)].map((_, inx) =>
                  inx < 5 ? (
                    <IoStar
                      className='text-purple-600 text-xl mx-1 mt-2'
                      key={inx}
                    />
                  ) : (
                    ''
                  )
                )}
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Popular;

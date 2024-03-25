import { useGlobalContext } from '../hook/useGlobalContext';
import Card from './Card';
import Loading from './Loading';

const NewArrivals = () => {
  const { loading, newBooks } = useGlobalContext();

  return (
    <section className='py-16 b-line' id='newArrivals'>
      <div className='m-auto px-4 container flex flex-col'>
        <div className='sub-h-box m-auto'>
          <h2 className='sub-h'>new arrivals</h2>
        </div>
        {loading ? (
          <Loading />
        ) : newBooks.length < 1 ? (
          <h2 className='text-white capitalize text-center text-lg font-semibold mt-4'>
            Sorry! there is a problem.
          </h2>
        ) : (
          <div className='pt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
            {newBooks.map((book) => (
              <Card
                key={book.id}
                {...book}
                cardView={'flex w-72 sm:w-96'}
                imgH={'h-28'}
                contP={'ps-2'}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// imgH - 32,44 ;flex, '' ; cardW - max-w-xl, max-w-xs; contP - ps-2, 'pt-2';

export default NewArrivals;

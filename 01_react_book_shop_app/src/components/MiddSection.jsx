import bgFixed from '../assets/img/fixed-bg.jpg';
const MiddSection = () => {
  return (
    <div
      className='relative w-full h-96 bg-fixed bg-cover bg-center b-line'
      style={{ backgroundImage: `url(${bgFixed})` }}
    >
      <div className='absolute inset-0 w-full h-full bg-gray-900 bg-opacity-75 flex justify-center items-center'>
        <h2 className='text-white capitalize text-4xl font-semibold'>
          best place for books
        </h2>
      </div>
    </div>
  );
};

export default MiddSection;

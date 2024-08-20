import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import img1 from '../assets/man-1.jpg';
import img2 from '../assets/woman-1.jpg';
import img3 from '../assets/man-2.jpg';
import img4 from '../assets/woman-2.jpg';
import img5 from '../assets/man-3.jpg';
import img6 from '../assets/woman-3.jpg';
import Rating from './Rating';
import { FaQuoteLeft } from 'react-icons/fa';

const Feedback = () => {
  const feedbackData = [
    {
      name: 'john doe',
      img: img1,
      occasion: 'software engineer',
      rating: '5',
      comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Cupiditate sunt quos repellat nobis corrupti dignissimos esse, hic amet qui expedita?`,
    },
    {
      name: 'lily williams',
      img: img2,
      occasion: 'blogger',
      rating: '4.8',
      comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illo, sapiente ullam eaque dignissimos minus esse saepe molestiae, vitae reprehenderit accusamus? Mollitia non perferendis rem commodi quo nam officia et.`,
    },
    {
      name: 'dave johnson',
      img: img3,
      occasion: 'computer engineer',
      rating: '4.7',
      comment: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum incidunt atque, id nisi repellendus perspiciatis totam at sapiente iusto mollitia, nemo quibusdam ducimus.`,
    },
    {
      name: 'molly green',
      img: img4,
      occasion: 'youtuber',
      rating: '5',
      comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit natus eligendi distinctio explicabo inventore provident tenetur doloribus magnam!`,
    },
    {
      name: 'seth warren',
      img: img5,
      occasion: 'businessman',
      rating: '5',
      comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates asperiores, laborum itaque perspiciatis nisi in. Commodi consequuntur repellendus fuga libero dignissimos numquam exercitationem possimus, et accusantium.`,
    },
    {
      name: 'isabella smith',
      img: img6,
      occasion: 'content creator',
      rating: '4.9',
      comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid modi doloribus quibusdam error aliquam!`,
    },
  ];
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  return (
    <section className='feedback common-p py-14 container m-auto'>
      <h2 className='sub-heading'>customers feedback</h2>
      <div className='embla' ref={emblaRef}>
        {' '}
        <div className='embla__container'>
          {feedbackData.map((feedback, inx) => (
            <div className='embla__slide' key={inx}>
              <div className='bg p-8 rounded-xl h-full'>
                <img
                  src={feedback.img}
                  alt=''
                  className='max-w-28 m-auto aspect-square rounded-full border-2 border-purple-700 shadow-[4px_4px_4px_rgba(0,0,0,0.2),-4px_-4px_4px_rgba(255,255,255,0.4)] mb-4'
                />
                <div className='max-w-md text-center m-auto'>
                  <Rating rating={feedback.rating} className='m-auto' />
                  <h4 className='mt-3 mb-1 text-xl'>{feedback.name}</h4>
                  <p className='capitalize text-slate-500'>
                    {feedback.occasion}
                  </p>
                  <div className='relative'>
                    <span className='absolute -top-6 -left-[3.25rem] text-5xl opacity-20 text-purple-800'>
                      <FaQuoteLeft />
                    </span>
                    <p>{feedback.comment}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>{' '}
      </div>
    </section>
  );
};

export default Feedback;

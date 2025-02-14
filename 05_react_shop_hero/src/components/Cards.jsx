import Card from './Card';
import { productData } from '../productData';
import { useState } from 'react';

const Cards = () => {
  const [type, setType] = useState(
    productData.filter((item) => item.type === 'new')
  );
  const [current, setCurrent] = useState('New Arrival');

  const handleTypes = (e) => {
    let text = e.target.textContent;

    if (text === 'New Arrival') {
      const filtered = productData.filter((item) => item.type === 'new');
      setType(filtered);
      setCurrent('New Arrival');
    } else if (text === 'Best Seller') {
      const filtered = productData.filter((item) => item.type === 'best');
      setType(filtered);
      setCurrent('Best Seller');
    } else if (text === 'Featured Products') {
      const filtered = productData.filter((item) => item.type === 'featured');
      setType(filtered);
      setCurrent('Featured Products');
    }
  };

  return (
    <section className='container card-box py-4'>
      <ul className='d-flex'>
        <li>
          <a
            className={current === 'New Arrival' && 'current'}
            onClick={handleTypes}
          >
            New Arrival
          </a>
        </li>
        <li>
          <a
            className={current === 'Best Seller' && 'current'}
            onClick={handleTypes}
          >
            Best Seller
          </a>
        </li>
        <li>
          <a
            className={current === 'Featured Products' && 'current'}
            onClick={handleTypes}
          >
            Featured Products
          </a>
        </li>
      </ul>

      <div className='row justify-content-lg-between justify-content-center'>
        {type.map((item) => (
          <Card
            key={item.id}
            text={item.text}
            price={item.price}
            card_img={item.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Cards;

// import React, {useState} from 'react';
// import { collectionData } from './collection';

// const App = () => {

//   return (
//     <>
//       <section>
//         <div>
//           <h2>React Filter</h2>
//           <div>
//             <button value="All" onClick={handleBtns}>All</button>
//             <button value="Cars" onClick={handleBtns}>Cars</button>
//             <button value="Views" onClick={handleBtns}>Views</button>
//           </div>

//           <div>
//             {category.map((item) => (
//               <div key={item.id}>
//                 <div>
//                   <img src={item.linkImg} alt={item.name} />
//                   <div>
//                     <h1>{item.name}</h1>
//                     <p>{item.kind}</p>
//                      <p>{item.info} </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default App

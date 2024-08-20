import BestProducts from './components/BestProducts';
import Discover from './components/Discover';
import Feature from './components/Feature';
import Feedback from './components/Feedback';
import Header from './components/Header';
import NavBar from './components/NavBar';
import NewArrival from './components/NewArrival';
import Services from './components/Services';

const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Feature />
      <BestProducts />
      <Services />
      <NewArrival />
      <Discover />
      <Feedback />
    </>
  );
};

export default App;

import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/Navbar';
import QualityHealth from './components/QualityHealth';
import Subscribe from './components/Subscribe';
import Testimonial from './components/Testimonial';
import WhyChoose from './components/WhyChoose';

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Cards />
      <WhyChoose />
      <Testimonial />
      <QualityHealth />
      <Subscribe />
      <Footer />
    </>
  );
};

export default App;

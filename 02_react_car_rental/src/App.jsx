import Footer from './components/Footer';
import Hero from './components/Hero/Hero';
import HowWork from './components/HowItWorks/HowWork';
import MobileApp from './components/MobileApp';
import Navbar from './components/Navbar';
import Popular from './components/Popular';
import Testimonial from './components/Testimonials';
import WhyChoose from './components/WhyChoose';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowWork />
      <WhyChoose />
      <Popular />
      <Testimonial />
      <MobileApp />
      <Footer />
    </>
  );
};

export default App;

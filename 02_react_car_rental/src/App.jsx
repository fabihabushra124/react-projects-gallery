import Hero from './components/Hero/Hero';
import HowWork from './components/HowItWorks/HowWork';
import Navbar from './components/Navbar';
import Popular from './components/Popular';
import WhyChoose from './components/WhyChoose';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowWork />
      <WhyChoose />
      <Popular />
    </>
  );
};

export default App;

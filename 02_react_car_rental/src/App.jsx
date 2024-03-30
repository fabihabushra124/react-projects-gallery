import Hero from './components/Hero/Hero';
import HowWork from './components/HowItWorks/HowWork';
import Navbar from './components/Navbar';
import WhyChoose from './components/WhyChoose';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowWork />
      <WhyChoose/>
    </>
  );
};

export default App;

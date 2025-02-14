import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NabBar from './components/NabBar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Category from './components/Category';
import Cards from './components/Cards';
import SaleBanner from './components/SaleBanner';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <NabBar />
      <main>
        <Hero />
        <Featured />
        <Category />
        <Cards />
        <SaleBanner />
      </main>
      <Footer />
    </>
  );
};

export default App;

import Facilities from '../components/Facilities';
import Footer from '../components/Footer';

import Navbar from '../components/Navbar';
import NewArrivals from '../components/NewArrivals';
import Populer from '../components/Populer';
import Header from '../components/Header';
import MiddSection from '../components/MiddSection';
import Feedbacks from '../components/Feedbacks';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Facilities />
        <NewArrivals />
        <MiddSection />
        <Populer />
        <Feedbacks />
      </main>
      <Footer />
    </>
  );
};

export default Home;

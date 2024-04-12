import Facilities from '../components/Facilities';
import Footer from '../components/Footer';

import Navbar from '../components/Navbar';
import NewArrivals from '../components/NewArrivals';
import Popular from '../components/Popular';
import Header from '../components/Header';
import MidSection from '../components/MidSection';
import Feedbacks from '../components/Feedbacks';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Facilities />
        <NewArrivals />
        <MidSection />
        <Popular />
        <Feedbacks />
      </main>
      <Footer />
    </>
  );
};

export default Home;

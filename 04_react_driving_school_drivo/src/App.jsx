import About from './components/About';
import Courses from './components/Courses';
import Facts from './components/Facts';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import WhyChoose from './components/WhyChoose';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Facts />
      <About />
      <Courses />
      <WhyChoose />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;

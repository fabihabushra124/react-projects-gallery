import Home from './pages/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Search from './pages/Search';
import Error from './pages/Error';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;

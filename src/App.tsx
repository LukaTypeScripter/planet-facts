
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/Header/Header';
import PlanetPage from './pages/PlanetPage';
import { data } from './data';
const App = () => {
  return (
    <Router>
          <Header />
         <Routes>
          <Route  path="/" element={<></>} />
          <Route path="/about" element={<></>} />
          <Route path='/planet/:planetName' element={<PlanetPage data={data} />} />
          <Route path="/contact" element={<></>} />
        </Routes> 
        <Footer />
    </Router>
  );
}

export default App;

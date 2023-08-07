
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import PlanetPage from './pages/PlanetPage';
import { data } from './data';
const App = () => {
  return (
    <Router>
          <Header />
         <Routes>
         <Route path="/" element={<PlanetPage data={data} />} />
        <Route path="/planet/:planetName" element={<PlanetPage data={data} />} />
        </Routes> 
    </Router>
  );
}

export default App;

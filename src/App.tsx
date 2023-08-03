
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/Header/Header';
const App = () => {
  return (
    <Router>
          <Header />
         <Routes>
          <Route  path="/" element={<></>} />
          <Route path="/about" element={<></>} />
          <Route path="/contact" element={<></>} />
        </Routes> 
        <Footer />

    </Router>
  );
}

export default App;

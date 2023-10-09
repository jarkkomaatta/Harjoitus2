import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Meals';
import About from './pages/Fox';
import ConctactUs from './pages/Users';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Header />
      <Menu />
      <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ConctactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

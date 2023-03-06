import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Counter from './pages/Counter';
import Filter from './pages/Filter';
import Navbar from './components/Navbar'
import { CounterRedux } from './pages/CounterRedux';
import Product from './pages/Product';
import DetailProduct from './pages/DetailProduct';
import LearnWebStorage from './pages/LearnWebStorage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/about' element={<About />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/filter' element={<Filter />} /> */}
        <Route path='/counter-redux' element={<CounterRedux />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<DetailProduct />} />
        <Route path='/learn-web-storage' element={<LearnWebStorage />} />
      </Routes>
    </div>
  );
}

export default App;

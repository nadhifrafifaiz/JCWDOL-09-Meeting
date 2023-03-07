import { Routes, Route } from 'react-router-dom'
import Counter from './pages/Counter';
import LearnStorage from './pages/LearnStorage';
import Products from './pages/Products';
import Navbar from './components/Navbar'
import Product from './pages/Product'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/learn-storage' element={<LearnStorage />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;

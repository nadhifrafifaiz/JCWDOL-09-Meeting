import About from './pages/About';
import Home from './pages/Home';
import Error from './pages/Error';
import Todo from './pages/Todo';
import './style.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Chakra from './pages/Chakra';
import Users from './pages/Users';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Todo />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/chakra' element={<Chakra />} />
        <Route path='/users' element={<Users />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

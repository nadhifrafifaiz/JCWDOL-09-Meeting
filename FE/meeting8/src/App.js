import { Routes, Route } from 'react-router-dom'
import Counter from './pages/Counter';
import LearnStorage from './pages/LearnStorage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Counter />} />
        <Route path='/learn-storage' element={<LearnStorage />} />
      </Routes>
    </div>
  );
}

export default App;

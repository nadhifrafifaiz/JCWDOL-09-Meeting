import { Routes, Route } from 'react-router-dom'
import LearnStorage from './pages/LearnStorage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/learn-storage' element={<LearnStorage />} />
      </Routes>
    </div>
  );
}

export default App;

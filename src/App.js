import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Counter from './pages/Counter';
import NoPage from './pages/NoPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/counter/:project" element={<Counter />}/>
          <Route path="*" element={<NoPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
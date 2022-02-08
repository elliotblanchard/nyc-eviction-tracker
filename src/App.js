import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { SearchPage } from './pages/SearchPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
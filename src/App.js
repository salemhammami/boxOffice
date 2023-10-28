import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Starred from './Starred';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="starred" element={<Starred />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;

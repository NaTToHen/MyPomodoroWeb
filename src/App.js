import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/home/home.js';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
   </Router> 
  );
}

export default App;

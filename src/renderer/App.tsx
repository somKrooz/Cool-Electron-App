import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Dash from './components/Dash';
import './App.css'


function Hello() {
  return (
    <>
    <Dash></Dash>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}

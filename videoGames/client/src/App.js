import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home.jsx';
import Create from './components/Create.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="create" element={<Create/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

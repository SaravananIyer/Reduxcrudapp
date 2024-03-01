import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Allposts from './components/Allposts';
import Mypost from './components/Mypost';
import Createpost from './components/Createpost';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Allposts/>} />
        <Route path="/myposts" element={<Mypost/>} />
        <Route path="/create-update" element={<Createpost/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

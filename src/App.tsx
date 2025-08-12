
import {
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import Projects from './component/projects/Projects';
import About from './component/about/About';
import NavBar from './component/navbar/NavBar';

function App () {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Projects />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </>
  );
}

export default App;

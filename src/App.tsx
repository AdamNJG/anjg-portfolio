
import {
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import Projects from './component/projects/Projects';
import About from './component/about/About';
import NavBar from './component/navbar/NavBar';
import Intro from './component/intro/Intro';

function App () {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Intro />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </>
  );
}

export default App;

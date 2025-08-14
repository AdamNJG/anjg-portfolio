
import {
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import Projects from './component/projects/Projects';
import TechnicalSkills from './component/technicalSkills/TehnicalSkills';
import NavBar from './component/navbar/NavBar';
import Intro from './component/intro/Intro';

function App () {

  return (
    <>
      <NavBar/>
      <main id='main-content'>
        <Routes>
          <Route path="/" element={<Intro />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/skills" element={<TechnicalSkills />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;

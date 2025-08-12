
import {
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import Projects from './component/projects/Projects';
import NavBar from './component/navbar/NavBar';

function App () {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Projects />}/>
        <Route path="/about" element={
          <>
            about me
          </>
        }/>
      </Routes>
    </>
  );
}

export default App;

import './App.css';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar.js';
import Banner from './components/banner/Banner.js';
import Skills from './components/skills/Skills.js';
import Education from './components/education/Education.js';
import Projects from './components/projects/Projects.js';
import Achievements from './components/achievement/Achievements.js';
import Footer from './components/footer/Footer.js';
function App() {
  return (
    <>
      {/* <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/setAvatar' element={<SetAvatar/>}></Route>
      <Route path='/' element={<Chat/>}></Route>
    </Routes>
    </BrowserRouter> */}
        <Navbar/>
        <Banner/>
        <Skills/>
        <Education/>
        <Projects/>
        <Achievements/>
        <Footer/>
    </>
  );
}

export default App;

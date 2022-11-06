import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Contact from './components/Contact';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='container'>

    
    
      <Router>
        <Routes>
          <Route path="HNG-Task1" element={<Home/>}>home</Route>
          <Route path="/contact" element={<Contact/>} ></Route>
        </Routes>
      </Router>


    

</div>
  );
}


export default App;

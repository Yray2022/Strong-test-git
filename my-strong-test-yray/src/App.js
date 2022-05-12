
import React from 'react';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from './pages/About';
import AboutComments from './pages/AboutComments';
import Postss from './pages/Postss';



function App() {



  return (
    <BrowserRouter>
    <Navbar>
      <Link className='linkRoute' to='/'>О сайте</Link>
      <Link className='linkRoute' to='/about'>вернуса к постам </Link>
    </Navbar>
      <Routes>
        <Route path="/about" element={<Postss/>}/>
        <Route path='/' element={<About/>}/>
        <Route path='/about/:id' element={<AboutComments/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

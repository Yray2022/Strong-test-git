
import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from './pages/About';
import AboutComments from './pages/AboutComments';
import ModalAbout from './pages/ModalAbout';
import Postss from './pages/Postss';



function App() {

  const [visible, setVisible] = useState(false)

  const openModal = (e) => {
    e.preventDefault()
    setVisible(true)
  }

  const closeModal = (e) => {
    e.preventDefault()
    setVisible(false)
  }

  return (
    <BrowserRouter>
    <Navbar>
      <Link className='linkRoute' to='/'>О сайте</Link>
      <Link className='linkRoute' to='/about'> Посты </Link>
      <Link className='linkRoute' to='/modalAbout'>Модалка</Link>
    </Navbar>
      <Routes>
        <Route path="/about" element={<Postss/>}/>
        <Route path='/' element={<About/>}/>
        <Route path='/modalAbout' element={<ModalAbout openModal={openModal} closeModal={closeModal} visible={visible} setVisible={setVisible}/>}/>
        <Route path='/about/:id' element={<AboutComments/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

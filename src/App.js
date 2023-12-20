import './App.css';
import { Link, Routes, Route} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Book from './pages/Book';
import Chef from './pages/Chef';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <div>
      <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>
          <Container>
              <Navbar.Brand>
                  <Link to="/home" className="navbar-brand text-success fw-success fw-semibold">
                      Ресторан
                  </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
               <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto justify-content-end w-100'>
                  <Nav.Link href='/home' className='active text-uppercase'>Басты бет</Nav.Link>
                    <Nav.Link href='/menu' className='text-uppercase'>Мәзір</Nav.Link>
                    <Nav.Link href='/about' className='text-uppercase'>Біз жайлы</Nav.Link>
                    <Nav.Link href='/contact' className='text-uppercase'>Байланыс</Nav.Link>
                    <Nav.Link href='/book' className='text-uppercase'>Орын брондау</Nav.Link>
                    <Nav.Link href='/chef' className='text-uppercase'>Аспаздар</Nav.Link>
                    <div className='login'><Nav.Link href='/login' className='text-uppercase' id='login'>Кіру</Nav.Link></div>
                    <div className='register'><Nav.Link href='/register' className='text-uppercase' id='register'>Тіркелу</Nav.Link></div>


                </Nav>
               </Navbar.Collapse>
          </Container>
      </Navbar>
      <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/book' element={<Book />} />
          <Route path='/chef' element={<Chef />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
      </Routes>


      <footer className='bg-body-tertiary'>
          <p className='p-3 m-0 text-center'>byBalgynbek</p>
      </footer>
    </div>
  );
}

export default App;

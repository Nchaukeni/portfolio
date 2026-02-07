import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    }, []);

  return (
    <div className="bg-dark text-light min-vh-100">
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        fixed="top"
        className="shadow-sm"
      >
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">
            Nchaukeni Zulu
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto">
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offset content because navbar is fixed */}
      <Container className="pt-5 mt-5">
        <Hero />
        <Projects />
        <Skills />
        <Contacts />
      </Container>
    </div>
  )
}

export default App

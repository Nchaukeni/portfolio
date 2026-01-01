import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Nchaukeni Zulu</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <h1>Computer Science Student</h1>
        <p>
          I build full-stack web applications using React, Node.js, and MySQL.
        </p>
      </Container>
    </>
  )
}

export default App

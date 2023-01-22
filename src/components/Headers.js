import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Headers() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://play-lh.googleusercontent.com/9B8OxjqJDd-Shfl36IDo2te-Y8TBWgwqjYU5hmnUW_s8mzUSljRBfgt9FVlv8Ak27O_W"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Tikkaway
          </Navbar.Brand>
        </Container>
      </Navbar>
    


    </div>
    
  )
}

export default Headers
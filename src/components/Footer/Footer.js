import React from 'react';
import "./Footer.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <div  >
        <hr/>
        <Row className='footer' >
            <Col><img id='zuri' src='zuri-internship-img.svg' alt='zuri logo'/></Col>
            <Col><p className='text-muted' >HNG Internship 9 Frontend Task</p></Col>
            <Col ><img id='ingressive' src='ingressive.png' alt='ingress logo'/></Col>
        </Row>
        
    </div>
  )
}

export default Footer

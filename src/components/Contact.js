import React , { Component ,useState , render} from 'react';
import { Form, Col, Button  , FormExample} from "react-bootstrap";
import "./Contact.css";
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Contact() {
 
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (

    <div>
        <h2 className='mt-5'>Contact Me</h2>
        <p>Hi there , contact me to ask me about anything you have in mind</p>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3 mt-5">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter your first name"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter your last name"
            
          />

        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="yourname@email.com" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>

      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Label>Message</Form.Label>
          <Form.Control className='message' type="text" placeholder="Send me a message and I will reply as soon as possible." required />
          <Form.Control.Feedback type="invalid">
           Send me a message and I will reply as soon as possible.
          </Form.Control.Feedback>
        </Form.Group>

      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="You agree to providing your data to who may contact you"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button as={Col} md="12" type="submit">Send Message</Button>
    </Form>
    </div>
  );
}


    

export default Contact;
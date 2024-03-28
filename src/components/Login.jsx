import { Button, Form, Container, InputGroup } from "react-bootstrap";
import { PersonFill, LockFill } from "react-bootstrap-icons";
import "./Login.css";

function Login() {
  return (
    <div className="loginpg">
      <Container className="login-container">
        <div className="login-title">
          <h4>Login Form</h4>
        </div>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <PersonFill />
              </InputGroup.Text>
              <Form.Control type="email" placeholder="Enter email" />
            </InputGroup>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <LockFill />
              </InputGroup.Text>
              <Form.Control type="password" placeholder="Password" />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <div className="button-div">
            <Button variant="primary" type="submit">
              Submit
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;New User&nbsp;
            <a href="/Signup">Click Here</a>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default Login;

import React from 'react'
import {
  Table,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container
} from 'reactstrap';

import "antd/dist/antd.css";
import "../../styles/LoginSignup/signup.css";
import bg from '../../resources/bg-signup.png';

const Header = () => (

  <div className="signup">
    <Container>
      <Row>
        <Col><img className="imageGame" src={bg} width="400px" height="400px" alt=""/></Col>
        <Col>
          <form className="form-signup">

            <h2 className="title-signup">Create new account</h2>

            <Form>
              <FormGroup className="form-group">
                <Input
                  type="text"
                  className="input-username"
                  placeholder="Enter username"
                  title="Must contain letter, and at least 4 or more characters"
                  pattern="(?=.*[a-z]).{4,}"
                  required/>
              </FormGroup>
              <FormGroup className="form-group">
                <Input
                  type="password"
                  className="input-password"
                  placeholder="Enter password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  required/>
              </FormGroup>
              <FormGroup className="form-group">
                <Input
                  type="password"
                  className="input-password"
                  placeholder="Confirm password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  required/>
              </FormGroup>
              <Button type="submit" color="success" className="btn-signup">Sign up</Button>
            </Form>

          </form>
        </Col>
      </Row>
    </Container>

  </div>
);

export default Header;
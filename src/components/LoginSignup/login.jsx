import React from 'react'
import {
  Table,
  Row,
  Col,
  Button,
  Form,
  Input,
  Container
} from 'reactstrap';
import "antd/dist/antd.css";
import "../../styles/LoginSignup/login.css";
import {message} from 'antd'
import * as gameActions from "../../actions";
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {withRouter} from 'react-router-dom';



class Header extends React.Component{

  handleSubmit = e => {
    e.preventDefault();
    console.log("username: " + e.target.username.value);
    console.log("password: " + e.target.password.value);
    
    let UserDemo = {
      id: 10,
      username:e.target.username.value,
      money: 500,
      token:"abcxyz",
      isAuth: true
    }

    this.props.actions.updateUser(UserDemo);
    
    console.log(this.props.user);

    message.success("Log in successfully!")  
    this.props.history.push('/rooms'); 
  }

  render(){
    return (
      <div className="header">
        <Form className="form-login" onSubmit={this.handleSubmit}>
          <Container fluid="true">
            <Row>
              <Col md={6}>
                <h1 className="logo"><a href="/">Cora</a></h1>
              </Col>
              <Col md={2}>
    
                <Table borderless>
                  <tbody>
                    <tr className="title-login">
                      <th>Username
                      </th>
    
                    </tr>
                    <tr>
                      <td><Input
                        type="text"
                        className="input-username"
                        name="username"
                        title="Must contain letter, and at least 4, at max 8"
                        pattern="(?=.*[a-z]).{4,8}"
                        required/></td>
    
                    </tr>
                  </tbody>
                </Table>
              </Col >
              <Col md={2}>
                <Table borderless>
                  <tbody>
                    <tr className="title-login">
                      <th>Password
                      </th>
                    </tr>
                    <tr>
                      <td><Input
                        type="password"
                        className="input-password"
                        name="password"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,16}"
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 4, at max 16"
                        required/></td>
                    </tr>
                  </tbody>
                </Table>
    
              </Col>
              <Col md={2}>
                <Table borderless>
                  <tbody>
                    <tr className="title-login">
    
                      <th>&nbsp;</th>
                    </tr>
                    <tr>
                      <td>
                        <Button type="submit" color="primary" className="btn-login">Log in</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </Form>
    
      </div>
    );
  }
} 

const mapStateToProps = state => (
  {
    user:state.user
  }
);

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(gameActions, dispatch)
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
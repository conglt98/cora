import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import {connect} from 'react-redux'
import '../../styles/NavBar/navbar.css';
import {message} from 'antd'

class NavBarComp extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this
      .toggle
      .bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logOut(){
    message.success("Log out!");
  }

  getHistory(){
    message.success("Get history!");
  }

  render() {
    return (
      <div>
        <Navbar className="navbar-header" color="dark" dark expand="md">
          <NavbarBrand href="/" className="cora">Cora</NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem >
                <NavLink href="/rooms#" className="nav-item-header-money">Money: <span className="value">${this.props.user.money}</span></NavLink>
              </NavItem>
              
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="nav-item-header-user">
                  {this.props.user.username}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                   <button className="btn-dropdowns" onClick={this.getHistory}>History</button>
                  </DropdownItem>
    
                  <DropdownItem divider/>
                  <DropdownItem>
                    <button className="btn-dropdowns" onClick={this.logOut}>Log out</button>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

  
}

function mapStateToProps(state){
  return {
      user: state.users[0]
  };
}

let NavBar = connect(mapStateToProps)(NavBarComp);
export default NavBar;
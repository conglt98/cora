import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Modal} from 'antd';
import {withRouter} from 'react-router-dom';
import {chooseRoom, updateUserO} from '../actions/index';
import {bindActionCreators} from 'redux';
import {message} from 'antd'

class ChooseRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      id: "",
      betMoney:0,
      host:""
    }
  }

  showModal = () => {
    this.setState({visible: true});
  };

  handleOk = e => {
    console.log(e);
    this.setState({visible: false});

    if (this.props.user.money < this.state.betMoney){
      message.error("Your money is not enough!");  
    }else{

      
      this.props.updateUserOFunc(this.props.user)
      
      let roomObject = {
        id: this.state.id,
        name: this.props.chooseRoom.name,
        createdAt:this.props.chooseRoom.createdAt,
        betMoney: this.state.betMoney,
        host: this.props.chooseRoom.host
      }

      console.log(roomObject);

      this.props.chooseRoomFunc(roomObject);

      message.success("Join room");
      this.props.history.push('/play');
    }
  };

  handleCancel = e => {
    console.log(e);
    this.setState({visible: false});
    this.props.chooseRoomFunc(null);
  };



  componentWillReceiveProps(nextProps) {
    if(nextProps.chooseRoom) {
      this.setState({visible: true, id:nextProps.chooseRoom.id,
        betMoney:nextProps.chooseRoom.betMoney,
        host:nextProps.chooseRoom.host
      });
    }
  }

  render() {

    return (
      <div>
        <Modal
          title="Join room"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}>
          <div className="text-ask">Do you accept bet money ${this.state.betMoney} - ID: {this.state.id} -  Host: {this.state.host}? </div>
        </Modal>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {chooseRoom: state.chooseRoom,
          user:state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    chooseRoomFunc: chooseRoom,
    updateUserOFunc: updateUserO
  }, dispatch);
}

let ChooseRoomContainer = connect(mapStateToProps,mapDispatchToProps)(ChooseRoom);
export default withRouter(ChooseRoomContainer);

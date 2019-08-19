import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Modal} from 'antd';
import {withRouter} from 'react-router-dom';

class ChooseRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      id: ""
    }
  }

  showModal = () => {
    this.setState({visible: true});
  };

  handleOk = e => {
    console.log(e);
    this.setState({visible: false});
    this.props.history.push('/play');
  };

  handleCancel = e => {
    console.log(e);
    this.setState({visible: false});
  };



  componentWillReceiveProps(nextProps) {
    if(nextProps.chooseRoom) {
      this.setState({visible: true, id:nextProps.chooseRoom.id});
    }
  }

  render() {

    return (
      <div>
        <Modal
          title="Result"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}>
          {this.state.id}
        </Modal>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {chooseRoom: state.chooseRoom};
}

let ChooseRoomContainer = connect(mapStateToProps)(ChooseRoom);
export default withRouter(ChooseRoomContainer);

import React from 'react'
import { Modal } from 'antd';

class GameResultModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
    
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.is_win===1||nextProps.is_win===0) {
      this.setState({visible: true});
    }
  }

  render() {
    const {piece_current, is_win} = this.props;

    return (
      <div>
        <Modal
          title="Result"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div>
              <p>{" "} {is_win === 1
                  ? (
                    <span>{piece_current}
                      WIN</span>
                  )
                  : is_win === 0
                    ? (
                      <span>DRAW</span>
                    )
                    : null}
              </p>
            </div>
        </Modal>
      </div>
    );
  }
}

export default GameResultModal;

import React, {Component} from 'react'
import '../../../styles/Game/InforRoom.css'
import vs from '../../../resources/vs.png'
import {connect} from 'react-redux'

export class InfoRoom extends Component {
  state={
    money: this.props.chooseRoom ? this.props.chooseRoom.bet_money : 0,
    host: this.props.chooseRoom? this.props.chooseRoom.host_name:""
  }

  render() {
    
    return (
      <div className="info">
        <img src={vs} width="350px" height="460px" alt=""/>
        <div className="box-user-x">{this.state.host}</div>
        <div className="box-user-o">{this.props.userO.username}</div>
        <div className="box-bet-money">${this.state.money}</div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.users,
    chooseRoom:state.chooseRoom,
    userO: state.userOCurrent.userO
  };
}

export default connect(mapStateToProps)(InfoRoom);
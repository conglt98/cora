import React, {Component} from 'react'
import '../../../styles/Game/InforRoom.css'
import vs from '../../../resources/vs.png'

export class InfoRoom extends Component {
  render() {
    return (
      <div className="info">
        <img src={vs} width="350px" height="460px" alt=""/>
        <div className="box-user-x">UserX</div>
        <div className="box-user-o">UserO</div>
        <div className="box-bet-money">$999</div>
      </div>
    )
  }
}
export default InfoRoom;
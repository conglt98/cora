import React, {Component} from 'react'
import '../../../styles/Game/InforRoom.css'

export class InfoRoom extends Component {
  render() {
    return (
      <div className="info container">
        <div className="row versus">
          <div>user1</div>
        </div>

        <div className="row bet-money">
          <div className="title-bet">
            Bet money
          </div>
          <div className="value-bet">
            $999
          </div>
        </div>

        <div className="row versus">
          <div>user2</div>
        </div>

      </div>
    )
  }
}
export default InfoRoom;
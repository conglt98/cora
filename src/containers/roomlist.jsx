import React, {Component} from 'react'
import {connect} from 'react-redux'

class RoomList extends Component {

  createRoomListItems() {
    let listItems = this
      .props
      .rooms
      .map((eachRoom) => {
        return (
          <div key={eachRoom.id} className="col-lg-6 col-md-12 col-room">
            <div className="card-room">
              <div>
                <div className="room-name">
                  {eachRoom.name}
                </div>
                <div className="room-created-at">
                  {eachRoom.createdAt}
                </div>
              </div>
              <div className="room-bet-money">
                ${eachRoom.betMoney}
              </div>
            </div>
          </div>
        );
      })
    return listItems;
  }

  render() {
    return (
      <div className="row">
        {this.createRoomListItems()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {rooms: state.rooms};
}

let RoomContainer = connect(mapStateToProps)(RoomList);
export default RoomContainer;
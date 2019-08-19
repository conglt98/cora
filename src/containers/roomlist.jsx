import React, {Component} from 'react'
import {connect} from 'react-redux'
import Pagination from '../components/Rooms/pagination'
import '../styles/Room/room.css'
import {chooseRoom} from '../actions/index';
import {bindActionCreators} from 'redux';

class RoomList extends Component {

  state = {
    allRooms: [],
    currentRooms: [],
    currentPage: null,
    totalPages: null
  };

  componentDidMount() {
    const allRooms = this.props.rooms;
    this.setState({ allRooms });
  }

  onPageChanged = data => {
    const { allRooms } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentRooms = allRooms.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentRooms, totalPages });
  };


  createRoomListItems(currentItems) {
    let listItems = 
      currentItems
      .map((eachRoom) => {
        return (
          <div className="col-lg-6 col-md-12 col-room">
            <div key={eachRoom.id} className="card-room" 
            onClick={() => {this.props.chooseRoom(eachRoom)}}>
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
    const {
      allRooms,
      currentRooms,
      currentPage,
      totalPages
    } = this.state;
    const totalRooms = allRooms.length;

    if (totalRooms === 0) return null;
    return (
      <div>
        <h2 className="title-room-list">Total rooms: {totalRooms}</h2>

      <div className="row">
        {this.createRoomListItems(currentRooms)}
      </div>
       <div className="d-flex flex-row py-4 align-items-center justify-content-center">
       <Pagination
         totalRecords={totalRooms}
         pageLimit={8}
         pageNeighbours={1}
         onPageChanged={this.onPageChanged}
       />
     </div>
     
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {rooms: state.rooms};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    chooseRoom: chooseRoom
  }, dispatch);
}

let RoomContainer = connect(mapStateToProps,mapDispatchToProps)(RoomList);
export default RoomContainer;
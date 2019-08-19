import React from 'react'
import RoomContainer from '../../containers/roomlist'
import NavBar from '../NavBar'
import Footer from '../Footer'
import {Button} from 'reactstrap'
import '../../styles/Room/room.css'
import ChooseRoomContainer from '../../containers/choose-room'


const Room = ({match}) => (
  <div>
    <NavBar/>
    <div className="container container-room">
      < RoomContainer/>
      <ChooseRoomContainer/>
    </div>
    
    <div className="container">
    <div className="row">
    <Button color="primary" className="btn-create-room">
      +
    </Button>
    </div>
    </div>


    <Footer/>
  </div>
);

export default Room;
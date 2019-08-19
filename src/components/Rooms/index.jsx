import React from 'react'
import RoomContainer from '../../containers/roomlist'
import NavBar from '../NavBar'
import Footer from '../Footer'
import {Button} from 'reactstrap'
import '../../styles/Room/room.css'



const Room = ({match}) => (
  <div>
    <NavBar/>
    <div className="container container-room">
      <h2 className="title-room-list">Room list</h2>
      < RoomContainer/>
    </div>
    
    <div className="container">
    <div className="row">
    <Button color="primary" className="btn-create-room">Create room</Button>
    </div>
    </div>


    <Footer/>
  </div>
);

export default Room;
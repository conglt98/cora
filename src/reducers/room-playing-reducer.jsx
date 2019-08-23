import {roomplaying} from '../constants/actionTypes'

const inital_state = 
        {
            id:1,
            bet_money:0,
            host_name: "",
            host: "xxxx"
        }
    
export default (state = inital_state, action) => {
    switch (action.type) {
      case roomplaying.ROOM_PLAYING: {
        return action.room;
      }
      default:
        return state;
    }
  };
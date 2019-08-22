import { roomlist } from "../constants/actionTypes";

const inital_state = 
[
        {
            id: 1,
            name:"cong's room",
            createdAt: (new Date()).toLocaleString(),
            betMoney:999,
            host: "cong"
        },
        {
            id:2,
            name:"vuong's room",
            createdAt:(new Date()).toLocaleString(),
            betMoney:250,
            host: "vuong"
        }
]
    
export default (state = inital_state, action) => {
    switch (action.type) {
      case roomlist.UPDATE_ROOMS: {
        return action.rooms;
      }
      default:
        return state;
    }
  };
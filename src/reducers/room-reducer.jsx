import { roomlist } from "../constants/actionTypes";

const inital_state = 
    [
        {
            id: 1,
            name:"Room's cong",
            createdAt: (new Date()).toLocaleString(),
            betMoney:999,
            host: "cong"
        },
        {
            id:2,
            name:"Room's vuong",
            createdAt:(new Date()).toLocaleString(),
            betMoney:250,
            host: "vuong"
        },
        {
            id:3,
            name:"Room's abc",
            createdAt:(new Date()).toLocaleString(),
            betMoney:2000,
            host:"abcde"
        }, {
            id: 4,
            name:"Room's cong",
            createdAt: (new Date()).toLocaleString(),
            betMoney:100,
            host:"abcde"
        },
        {
            id:5,
            name:"Room's vuong",
            createdAt:(new Date()).toLocaleString(),
            betMoney:999,
            host:"abcde"
        }, {
            id: 6,
            name:"Room's cong",
            createdAt: (new Date()).toLocaleString(),
            betMoney:999,
            host:"abcde"
        },
        {
            id:7,
            name:"Room's vuong",
            createdAt:(new Date()).toLocaleString(),
            betMoney:999,
            host:"abcde"
        },{
            id: 8,
            name:"Room's cong",
            createdAt: (new Date()).toLocaleString(),
            betMoney:999,
            host:"abcde"
        },
        {
            id:9,
            name:"Room's vuong",
            createdAt:(new Date()).toLocaleString(),
            betMoney:999,
            host:"abcde"
        },{
            id: 10,
            name:"Room's cong",
            createdAt: (new Date()).toLocaleString(),
            betMoney:999,
            host:"abcde"
        },
        {
            id:11,
            name:"Room's vuong",
            createdAt:(new Date()).toLocaleString(),
            betMoney:999,
            host:"abcde"
        },{
            id: 12,
            name:"Room's cong",
            createdAt: (new Date()).toLocaleString(),
            betMoney:999,
            host:"abcde"
        } ,
        {
            id:13,
            name:"Room's vuong",
            createdAt:(new Date()).toLocaleString(),
            betMoney:999,
            host:"abcde"
        },{
            id: 14,
            name:"Room's cong",
            createdAt: (new Date()).toLocaleString(),
            betMoney:999,
            host:"abcde"
        } ,
        {
            id:15,
            name:"Room's vuong",
            createdAt:(new Date()).toLocaleString(),
            betMoney:999,
            host:"abcde"
        },{
            id: 16,
            name:"Room's cong",
            createdAt: (new Date()).toLocaleString(),
            betMoney:999,
            host:"abcde"
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
import FoodReducer from './food-reducer';
import UserReducer from './user-reducer';
import {combineReducers} from 'redux';
import ActiveFoodReducer from './active-food-reducer';
import GameReducer from './game-reducer';
import RoomReducer from './room-reducer'
import ChooseRoomReducer from './choose-room-reducer'
import UserOReducer from './user-o-reducer'

const allReducers = combineReducers({
    foods: FoodReducer,
    user: UserReducer,
    activeFood: ActiveFoodReducer,
    gameReducer: GameReducer,
    rooms: RoomReducer,
    chooseRoom: ChooseRoomReducer,
    userOCurrent: UserOReducer  
});

export default allReducers;
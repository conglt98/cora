import FoodReducer from './food-reducer';
import UserReducer from './user-reducer';
import {combineReducers} from 'redux';
import ActiveFoodReducer from './active-food-reducer';
import GameReducer from './game-reducer';
import RoomReducer from './room-reducer'
import ChooseRoomReducer from './choose-room-reducer'

const allReducers = combineReducers({
    foods: FoodReducer,
    users: UserReducer,
    activeFood: ActiveFoodReducer,
    gameReducer: GameReducer,
    rooms: RoomReducer,
    chooseRoom: ChooseRoomReducer
});

export default allReducers;
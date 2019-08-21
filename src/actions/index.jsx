import {SELECT_FOOD} from './actionTypes'
import { types, rooms, UserO } from "../constants/actionTypes";

export const selectFood = (food) => {
    console.log(`You click = ${food.name}`);
    return {
        type: SELECT_FOOD,
        payload: food
    }
}

export const chooseRoom = (room) => {
    return {
        type: rooms.CHOOSE_ROOM,
        payload: room
    }
}

export const set_number_cell = number_cell => ({
    type: types.SET_NUMBER_CELL,
    number_cell
})

export const init_array = array_board => ({
    type: types.INIT_ARRAY,
    array_board
})

export const mark =  (array_new) => ({
    type: types.MARK,
    array_new
})

export const switch_piece = (data) => ({
    type: types.SWITCH_PIECE,
    data
})

export const updateUserO = (userO) => {
    return {
        type: UserO.UPDATE_USER_O,
        userO
    }
}
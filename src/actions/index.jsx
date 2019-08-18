import {SELECT_FOOD} from './actionTypes'
import { types, pieces } from "../constants/actionTypes";


export const selectFood = (food) => {
    console.log(`You click = ${food.name}`);
    return {
        type: SELECT_FOOD,
        payload: food
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
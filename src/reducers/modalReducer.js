import { CHANGE_MODAL, SET_TOGGLE, CLOSE_MODAL } from '../actions/index';
import { initialState } from './initialState';

const modalReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_MODAL:
            return {
                ...state,
                modalIsOpen: !state.modalIsOpen
            }
        case SET_TOGGLE:
            return {
                ...state,
                toggle: !state.toggle
            }
        case CLOSE_MODAL:
            return {
                ...state,
                modalIsOpen: false
            }
    
        default:
            return state;
    }
}

export default modalReducer;
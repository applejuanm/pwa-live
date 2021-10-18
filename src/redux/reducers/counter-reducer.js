//el reducer lo que hace es un switch
import {
    INCREMENTAR_CONTADOR,
    DECREMENTAR_CONTADOR,

} from '../actions/counter-actions';

//inicia contador en 0
const initialState = {
    counter: 0,

}

export const counter = (state = initialState, action) => {
    //volcamos todo, lo que el estado valia igual lo que antes
    //pero le modificamos counter o lo que quereamos
    //me pasa el estado actual solo que le paso lo que me toca
    switch (action.type) {
        case INCREMENTAR_CONTADOR:
            return {
                ...state,
                counter: state.counter + 1,
            }
        case DECREMENTAR_CONTADOR:
            return {
                ...state,
                counter: state.counter - 1
            }

        default:
            return state;
    }

}

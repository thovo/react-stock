import {FETCH_DATA_ACTION, MODIFY_DATA_ACTION, PAUSE_CALL_DATA} from "../actions/allActions";

const initialState = {
    pause: false,
    data: []
};


export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_ACTION:
            return {
                ...state,
                data: [...state.data, ...action.payload]
            };

        case MODIFY_DATA_ACTION:
            return {
                ...state,
                pause: false,
                data: state.data.map(d => {
                    if (d.index === action.index) {
                        return {
                            ...d,
                            stocks: {
                                ...d.stocks,
                                [action.name]: action.value
                            }
                        }
                    }

                    return d;
                })
            };
        case PAUSE_CALL_DATA:
            return {
                ...state,
                pause: action.value
            };
        default:
            return state
    }
}
import {FETCH_DATA_ACTION, MODIFY_DATA_ACTION} from "../actions/allActions";

const initialState = {
    index: [],
    cac40: [],
    nasdaq: [],
    chartData: []
};


export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_ACTION:
            return {
                ...state,
                index: [...state.index, ...action.payload.index],
                cac40: [...state.cac40, ...action.payload.cac40],
                nasdaq: [...state.nasdaq, ...action.payload.nasdaq],
                chartData: [...state.chartData, ...action.payload.chartData]
            };

        case MODIFY_DATA_ACTION:
            return {
                ...state,
                [action.name]: state[action.name].map((val, index) => index === action.index ? action.value : val)
            };

        default:
            return state
    }
}
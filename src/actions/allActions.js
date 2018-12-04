import apiURL from '../environnment';

export const FETCH_DATA_ACTION = 'FETCH_DATA_ACTION';
export const MODIFY_DATA_ACTION = 'MODIFY_DATA_ACTION';
export const PAUSE_CALL_DATA = 'PAUSE_CALL_DATA';
export const fetchDataAction = () => dispatch => {
    fetch(apiURL).then(results => results.json()).then(data => {
        dispatch({
            type: FETCH_DATA_ACTION,
            payload: data
        })
    });

};

export const modifyDataAction = (index, value, name) => dispatch => {
    dispatch({
        type: MODIFY_DATA_ACTION,
        index,
        value,
        name
    })
};

export const pauseCallData = (value) => dispatch => {
    dispatch({
        type: PAUSE_CALL_DATA,
        value
    })
};

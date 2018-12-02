import apiURL from "../environnment";
export  const FETCH_DATA_ACTION = "FETCH_DATA_ACTION";

export const fetchDataAction = () => dispatch => {
    fetch(apiURL).then(results => results.json()).then(data => {
        const index = [];
        const cac40 = [];
        const nasdaq = [];
        data.forEach(d => {
            index.push(d.index);
            cac40.push(d.stocks.CAC40);
            nasdaq.push(d.stocks.NASDAQ);
        });
        const chartData = data;
        const result = {index, cac40, nasdaq, chartData};
        dispatch({
            type: FETCH_DATA_ACTION,
            payload: result
        })
    });

};

export const modifyDataAction = (index, value, name) => dispatch => {
    dispatch({
        type: 'MODIFY_DATA_ACTION',
        index,
        value,
        name
    })
};

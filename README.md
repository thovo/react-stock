# Description

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
For how to start and run the project, please visit Github repository of [Create React App](https://github.com/facebook/create-react-app).

This project is used to demonstate a demo of using Chart and Table to display sample data of stock like CAC40 and NASDAQ.

## Features of this application

1. Call 20 intances of data and draw the Chart
2. Allow to modify the data in the Table, the modification data will also update the Chart. When user modify the data, a pause state will be fired to stop the updating process
3. Call one instance of data for each interval of 1s, the Chart and the Table will be updated accordingly, the modification data will be kept normally

## Notes

This project need a backend server to supply data for testing which can be found [here](https://github.com/o2t/tutorial-node-stock-server )
In the backend project directory, you can run:

`npm install` or `yarn install` to install the dependencies

To run the backend server:

`npm start` or `yarn start`

## Todos

1. Make a toast components to inform about the state
2. Make a button to pause
3. Refactor code
4. Write more test cases to cover the application

## Credits

[Recharts](http://recharts.org/en-US/)
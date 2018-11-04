# react-redux-expense-tracker
This application helps authenticated users to create, edit, remove the expenses and sort/search them based on various parameters. 
Apart from this the users may even visualize monthly expenses via charts.

Live Demo: http://react-redux-expense-tracker.surge.sh

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Development
```bash
npm install
npm run start
```

### Tech stack used:
- React.js
- Redux as a state management library
- Firebase for backend( as  an auth service provider and realtime database for performing CRUD operations)
- Charting libraries like chart.js along with react-chartjs-2
- React Router for client side routing
- Redux Thunk middleware to dispatch async actions(storing data in firebase along with redux store)
- HTML5 
- CSS3

### NOTE:
Please make sure 3rd party cookies are enabled on your browser, if not then you may follow below link:
https://support.cloudhq.net/how-to-enable-3rd-party-cookies-in-google-chrome-browser/

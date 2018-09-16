import React from 'react';
import {Router, Route , Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import '../styles/index.css';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import ChartPage from '../components/ChartPage';

export const history=createHistory();

const AppRouter = () => (
  <Router history={history}  >
    <div>
      {/* <Header /> */}
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <PrivateRoute path="/stat" component={ChartPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;



// const PageNotFound = () => (
//     <div>
//         <img src={require('../404.jpg')} alt="Page not Found" style={{width: '50%', height: '50%', display: 'block', margin: 'auto', position: 'relative' }} />
//         <center>
//             <Link to="/">
//             Return to Home Page
//             </Link>
//         </center>
//     </div>
// );
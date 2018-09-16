import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import AppRouter, { history } from './routers/AppRouter';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { thunkSetExpense } from './actions/expenses';
import {firebase} from './firebase/firebase';
import {login, logout} from './actions/auth';

const store = configureStore();

ReactDOM.render(<p>Loading..</p>, document.getElementById('root'));

const jsx=(
          <Provider store={store}>
              <AppRouter />
          </Provider>
);

let hasRendered=false;
const renderPage = () => {
  if(!hasRendered){
    ReactDOM.render( jsx, document.getElementById('root'));
    hasRendered=true;
  }
    
}

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    store.dispatch(login(user.uid));//redux store should keep a track of user id to do authentication between different routes
    store.dispatch(thunkSetExpense()).then(() => {
      renderPage();
    });
    if(history.location.pathname === '/'){
      history.push('/dashboard');
    }

  }   
  else{
    store.dispatch(logout())
    renderPage();
    history.push("/");//if someone logs out, no matter where they are--bring them to login page
  } 
})

registerServiceWorker();
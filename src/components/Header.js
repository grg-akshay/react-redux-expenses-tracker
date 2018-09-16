import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';
import '../styles/index.css';


const Header = (props) => (
  <header className="header">
	<div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expense Tracker</h1>
        </Link>
        <button className="button button--link" onClick={() =>{
                                      return props.dispatch(startLogout());//don't pass a reference
        }} >
          Logout
        </button>
      </div>
    </div>
  </header>
);

export default connect()(Header);//we can dispatch an action only through connected component.

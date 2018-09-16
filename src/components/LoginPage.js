import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';
import '../styles/index.css';

const LoginPage = (props) =>{
    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <div className="box-layout__title">Expense Tracker</div>
                <p>Time to get your expenses under control!</p>
                 <button className="button" onClick = {() => {
                                    console.log('click');
                                    return props.dispatch(startLogin()); //don't pass a reference
                                    }
                                    }>Login with Google</button>

            </div>
           
        </div>
    )
}

export default connect()(LoginPage);
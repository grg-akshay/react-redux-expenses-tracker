import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import viewExpenses from '../selectors/expenses';
import '../styles/visibility.css';
import '../styles/list.css';

const ExpenseList = (props) => {
  return (
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      { props.expenses.length===0 && <p>No expense!</p> }  
      {
        props.expenses.map((expense)=>{
         return <ExpenseListItem key={expense.id} {...expense} />
        })
      }
    </div>
  );
}

const mapStateToProps = ({expenses,filters}) => {
  return {
    expenses: viewExpenses(expenses, filters),
    // filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseList);

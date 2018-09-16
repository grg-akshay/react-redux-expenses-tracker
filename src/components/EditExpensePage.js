import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { thunkEditExpense, thunkRemoveExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  return (
    <div>
     <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Edit Expense</h1>
      </div>
    </div>
    
    <div className="content-container">
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(thunkEditExpense(props.expense.id, expense));
          props.history.push('/');
        }}
      />
      <button className ="button" onClick={() => {
        props.dispatch(thunkRemoveExpense({ id: props.expense.id }));
        props.history.push('/');
      }}>Remove Expense</button>
    </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpensePage);

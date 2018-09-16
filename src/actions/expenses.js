//import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => {
  return {
    type: 'ADD_EXPENSE',
    expense
  }
};


export const thunkAddExpense = (expenseData = {}) => {

  return (dispatch,getState) => {
    const uid= getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = {
      description,
      note,
      amount,
      createdAt
    };

    database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    })


  }
}

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const thunkRemoveExpense =({ id }  = {}) => {
  //database.ref('expenses').child('-LMHfbEyigQ5RCDIrGx0').remove();
  return (dispatch,getState ) => {
    let uid =getState().auth.uid;
   return  database.ref(`users/${uid}/expenses`).child(id).remove().then(() => {
      dispatch(removeExpense({ id }) );
    })
}}

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const thunkEditExpense =(id,updates) =>{
  return (dispatch,getState ) => {
    let uid =getState().auth.uid;
   return  database.ref(`users/${uid}/expenses`).child(id).update(updates).then(() => {
      dispatch(editExpense(id,updates));
    })
  }
}

//SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSE',
  expenses
})

export const thunkSetExpense = () => {
  return (dispatch,getState ) => {
    let uid =getState().auth.uid;
   return  database.ref(`users/${uid}/expenses`).once('value') //return important because if you dont return anything and also dispatch then the next then will get undefined argument.
      .then((snapshot) => {

        const expenses = [];
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        })

        dispatch(setExpenses(expenses));
      })


  }
}
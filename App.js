import React from 'react';

import ExpenseForm from './Components/ExpenseForm/ExpenseForm' 
 import Expenses from './Components/Expenses/Expenses'

const App = () => {
  const expense =[
    {
      id : 'e1',
      title : "Car Wash",
      Date : new Date(2023, 5, 28),
      Amount :  520,
      location : "Delhi"
    },
    {
      id : 'e2',
      title : "Shopping",
      Date : new Date(2023, 1, 28),
      Amount :  400,
      location : "Noida"
    },
    {
      id : 'e3',
      title : "Car Travelling",
      Date : new Date(2023, 2, 18),
      Amount :  520,
      location : "Gurgoan"
    }
  ];
  return (
    <div>
      
      <ExpenseForm />
      <Expenses items={expense} />
    </div>
   
  );
}
 export default App;

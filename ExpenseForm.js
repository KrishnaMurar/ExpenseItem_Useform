import React , { useState } from 'react';
import './ExpenseForm.css'

function ExpenseForm(){
 const [enteredTitle, setEnteredTitle] = useState('');
 const [enteredAmount, setEnteredAmount] = useState('');
 const [enteredDate, setEnteredDate] = useState('');
    const titleClickHandler = (event) =>{
        setEnteredTitle(event.target.value);
    }

    const AmountClickHandler = (event) =>{
        setEnteredAmount(event.target.value);
    }

    const dateClickHandler = (event) =>{
        setEnteredDate(event.target.value);
    }

    return(

    <form>
        <div className = "new-expense__controls">
        <div className = "new-expense__control">
            <label>title</label>
            <input type ='text' onChange = {titleClickHandler} />
        </div>
        <div className = "new-expense__control">
            <label>Amount</label>
            <input type = 'number' min = "0.01" steps = "0.01" onChange = {AmountClickHandler} />
        </div>
        <div className = "new-expense__control">
            <label>Date</label>
            <input type = 'date' min ="2018-01-01" max = "31-12-2030" onChange = {dateClickHandler}/>
            </div>
     </div>
     <div className = "new-expense__actions">
        <button type='submit'>Add Expense</button>
        </div>
    </form>
 
    )
}

export default ExpenseForm
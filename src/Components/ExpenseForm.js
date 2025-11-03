import {  useState } from 'react'
import './ExpenseForm.css'
export default function ExpenseForm({onPassHandler}){
    const [enteredTitle,setEnteredTitle]= useState("")
    const [enteredAmount,setEnteredAmount]= useState("")
    const [enteredDate,setEnteredDate]= useState("")
    
    const onTitleChangeHandler = function(event){
        setEnteredTitle(event.target.value)
        
    }
    const onAmountChangeHandler = function(event){
        setEnteredAmount(event.target.value)

    }
    const onDateChangeHandler = function(event){
        setEnteredDate(event.target.value)
    }
    const onSubmitHandler = function(event){
        event.preventDefault();
        if (enteredTitle.trim() === "" || enteredAmount.trim() === "" || enteredDate.trim() === "") {
             alert("Please fill all fields before submitting!");
  return
  
}
        
    const expenseData = {
  title: enteredTitle,
  amount: enteredAmount,
  date: enteredDate,
  
  

};

onPassHandler(expenseData)
setEnteredTitle("")
setEnteredAmount("")
setEnteredDate('')
    }
    return(
        <form onSubmit={onSubmitHandler}>
            <div className="name_expense_add">
                <label>Title</label>
                <input type ="text" onChange={onTitleChangeHandler} value={enteredTitle} min='0.1'></input>
            </div>
            <div>
                <label >Amount</label>
                <input type = " text" onChange={onAmountChangeHandler} value={enteredAmount}></input>
            </div>
            <div>
                <label>Date</label>
                <input type = "date" onChange={onDateChangeHandler} value={enteredDate}></input>
            </div>
            <div>
                <button >Submit</button>
            </div>
        </form>
        
    )
}
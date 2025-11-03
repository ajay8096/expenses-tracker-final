import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ColorSchemesExample from "./UI/NavBar";
import ExpenseList from './ExpenseList';
import ExpenseChart from "./ExpenseChart";
 



export default function NavBarApp() {

  const [showForm, setShowForm] = useState(false);
  const [expenses,setExpenses]=useState([])
  const[filteredYear,setFilteredYear]=useState('All')
  
  const filteredExpenses =
  filteredYear === "All"
    ? expenses
    : expenses.filter(function(expense) {
        const year = new Date(expense.date).getFullYear().toString();
        
      
        return year === filteredYear;
    
      }

    );


  const showFormHandler = () => {
    setShowForm(true); 
  };
  



const onSaveDataHandler = function(newExpenses) {
  setExpenses(function(prevExpense){
    return( [...prevExpense,newExpenses])
      
  })
  setShowForm(false);
  
};
const onHomeAdderHandler= function(){

setShowForm(false);
 

}
const onFilterChangeHandler = function(selectedYear){
  setFilteredYear(selectedYear);




}



  return (
    
    <>

    


      <ColorSchemesExample onAddClick={showFormHandler} onHomeClick={onHomeAdderHandler} hasExpenses={expenses.length > 0}
      onYearChange={onFilterChangeHandler}
       />
      {expenses.length > 0 && <ExpenseChart chart={filteredExpenses} />}

      {showForm 
  ? <ExpenseForm onPassHandler={onSaveDataHandler} /> 
  : (expenses.length > 0 && filteredExpenses.length>0 
      ? <ExpenseList items={filteredExpenses}  /> 
           
      : <p style={{textAlign: "center", marginTop: "20px"}}>No expenses yet! Click "Add" to start.</p>)
      
      
}
 

    </>
  );
}

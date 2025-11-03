import './UI/ExpenseList.css';
export default function ExpenseList({items}){
    return(
        <div className="expense-list">
  <div className="expense-header">
    <div>Date</div>
    <div>Title</div>
    <div>Amount</div>
   
  </div>

  {items.map(function(expense, index){ return (
    <div className="data_expenses" key={index}>
      <div>{expense.date}</div>
      <div>{expense.title}</div>
      <div>₹{expense.amount}</div>
    </div>
  )
})}
</div>

   
    )
    
}
import {useState} from "react";
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'


const NewExpense = (props) => {
    const  [isEditing, setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    let formContent = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />;

    if (!isEditing) {
        formContent = <button onClick={startEditingHandler}>Add New Expense</button>
    }
    return (
        <div className='new-expense'>
            {formContent}
        </div>
    )
}

export default NewExpense;
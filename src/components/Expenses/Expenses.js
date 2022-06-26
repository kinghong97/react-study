import {useState} from 'react';
import Card from "../UI/Card";
import ExpensesFilter from './ExpenseFilter';
import './Expenses.css';
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChandgeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChandgeHandler}
                />
                <ExpenseChart expenses={filteredExpenses} />
                <ExpenseList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;

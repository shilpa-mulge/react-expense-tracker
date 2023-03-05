import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Econtext from '../store/econtext';


const categories = ['Food', 'Petrol', 'Salary', 'Other'];

const ExpenseForm = () => {
  const [moneySpent, setMoneySpent] = useState('');
  const [expenseDescription, setExpenseDescription] = useState('');
  const [category, setCategory] = useState('');
const ctx=useContext(Econtext)
  const handleMoneySpentChange = (event) => {
    setMoneySpent(event.target.value);
  };

  const handleExpenseDescriptionChange = (event) => {
    setExpenseDescription(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
try{
const response=await axios.post("https://expense-tracker-b91f4-default-rtdb.firebaseio.com/expenses.json",
    {ExpenseName:category, money:moneySpent})
    ctx.addExpenses()
}
catch(error){
alert(error.response.data.error.message)
}

  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="moneySpent">
        <Form.Label>Money spent:</Form.Label>
        <Form.Control type="number" value={moneySpent} onChange={handleMoneySpentChange} />
      </Form.Group>
      <Form.Group controlId="expenseDescription">
        <Form.Label>Expense description:</Form.Label>
        <Form.Control type="text" value={expenseDescription} onChange={handleExpenseDescriptionChange} />
      </Form.Group>
      <Form.Group controlId="category">
        <Form.Label>Category:</Form.Label>
        <Form.Control as="select" value={category} onChange={handleCategoryChange}>
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
};

export default ExpenseForm;






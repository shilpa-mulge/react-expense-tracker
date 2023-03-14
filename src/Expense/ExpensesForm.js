import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button,Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { ExpenseActions } from '../store/ExpenseReducer';
const categories = ['Food', 'Petrol', 'Salary', 'Other'];

const ExpenseForm = (props) => {
  const [moneySpent, setMoneySpent] = useState('');
  const [expenseDescription, setExpenseDescription] = useState('');
  const [category, setCategory] = useState('');
  const dispatch=useDispatch()
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
dispatch(ExpenseActions.AddExpense({ ExpenseName:category,
  money:moneySpent,
  description:expenseDescription,}))
  setCategory('');
  setExpenseDescription('');
  setMoneySpent('');
  };

  return (
    <Container className=' d-flex mt-3 bg-info bg-opacity-25 justify-content-center'>
    <Form className='bg-info bg-opacity-50 w-75' onSubmit={handleSubmit} >
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
    </Container>
  );
};

export default ExpenseForm;






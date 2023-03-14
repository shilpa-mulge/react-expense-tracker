
import {Col, Container, Nav, Row} from 'react-bootstrap'
import React, { useState } from 'react';
import { Button, Table} from 'react-bootstrap';
import Expense from './Expense';
import {  useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { saveAs } from 'file-saver';
import {theme} from '../theme'
import { ExpenseActions } from '../store/ExpenseReducer';
function ExpenseList(props) {
    const [show, setShow] = useState(false);
    const [expense, setExpense]=useState({})
const expenses=useSelector(state=>state.expenses.expenses);
const totalAmount=expenses.reduce((cur,expense)=>{
  return cur+=Number(expense.money)
},0)

const totalExpenses=expenses.length;

const dispatch=useDispatch()

const mode = useSelector((state) => state.theme.currentTheme);

    const handleClose = () => setShow(false);

    const handleShow = (expense) =>{
    setShow(true)
        setExpense(expense)
    }

const onDeletHandler=(id)=>{
    dispatch(ExpenseActions.RemoveExpense(id))
}

  function handleDownloadClick() {
    // convert expenses to CSV string
     const csv = expenses.map((expense) => `${expense.ExpenseName},${expense.description},${expense.money}`).join('\n');
    // create a new Blob object with the CSV string
  
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });

    // use file-saver to download the CSV file
  saveAs(blob, 'expenses.csv');
  }

    return (
        <>
      {expenses.length===0&& <p>No expenses, add some expenses</p>}
     <Expense show={show} onHide={handleClose} expense={expense} />
         <Container className="rounded p-4 mb-4 shadow bg-info bg-opacity-25 ">
        <Row>
         <Nav className='ms-auto '>
      <Nav.Link style={{color:'black'}}  as={NavLink}  onClick={handleDownloadClick} >Download expenses</Nav.Link>
      </Nav>
      </Row>
      <Row>
        <Table className='bg-info bg-opacity-50' style={{ color: theme[mode].text}}>
          <thead >
            <tr >
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={Math.random().toString()}>
                <td>{index + 1}</td>
                <td>{expense.ExpenseName}</td>
                <td>{expense.description}</td>
                <td>${expense.money}</td>
                <td><Button variant='info' onClick={handleShow.bind(null,expense)} > Edit</Button>
                {' '}
                <Button variant='danger' onClick={onDeletHandler.bind(null, expense.id)}>Delete</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
       </Row>
       <Row>
          <Col>Total Expenses:{totalExpenses}</Col>
          <Col>Total Amount: ${totalAmount}</Col>
          </Row> 
        </Container>
        </>
      );
    }
    
    

export default ExpenseList;
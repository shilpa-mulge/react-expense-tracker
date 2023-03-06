import axios from 'axios';
import {Col, Container, Nav, Row} from 'react-bootstrap'
import React, { useState } from 'react';
import { Button, Table} from 'react-bootstrap';
import Expense from './Expense';
import {  useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { saveAs } from 'file-saver';
function ExpenseList(props) {
    const [show, setShow] = useState(false);
    const [expense, setExpense]=useState({})
const expenses=useSelector(state=>state.expenses.expenses)
const totalExpenses=useSelector(state=>state.expenses.totalExpenses)
    const handleClose = () => setShow(false);

    const handleShow = (expense) =>{
    setShow(true)
        setExpense(expense)
    }

const onDeletHandler=async(data)=>{
    try{
        const response=await axios.delete(`https://expense-tracker-b91f4-default-rtdb.firebaseio.com/expenses/${data.id}.json`)
            console.log("successfuly deleted!")
            props.onClick()
        }
        catch(error){
        alert(error.response.data.error.message)
        }
}

  function handleDownloadClick() {
    // convert expenses to CSV string
     const csv = expenses.map((expense) => `${expense.Expensename},${expense.money}`).join('\n');
    // create a new Blob object with the CSV string
    console.log(csv)
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });

    // use file-saver to download the CSV file
  saveAs(blob, 'expenses.csv');
  }

    return (
        <>
         <Expense show={show} onHide={handleClose} expense={expense} onClick={props.onClick} />
         <Nav className='ms-auto'>
      <Nav.Link as={NavLink}  onClick={handleDownloadClick} >Download expenses</Nav.Link>
      </Nav>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={expense.id}>
                <td>{index + 1}</td>
                <td>{expense.Expensename}</td>
                <td>${expense.money}</td>
                <td><Button variant='info' onClick={handleShow.bind(null,expense)} > Edit</Button>
                {' '}
                <Button variant='danger' onClick={onDeletHandler.bind(null,expense)}>Delete</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Container className="rounded p-4 mb-4 shadow w-75">
        <Row>
          <Col>TotalExpenses  :</Col>
          <Col> {totalExpenses}</Col>
          </Row> 
        </Container>
        </>
      );
    }
    
    

export default ExpenseList;
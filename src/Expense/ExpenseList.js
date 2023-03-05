import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Table} from 'react-bootstrap';
import Econtext from '../store/econtext';
import Expense from './Expense';
function ExpenseList() {
    const [show, setShow] = useState(false);
    const [expense, setExpense]=useState({})

    const handleClose = () => setShow(false);

    const handleShow = (expense) =>{
    setShow(true)
        setExpense(expense)
    }

const onDeletHandler=async(id)=>{
    try{
        const response=await axios.delete(`https://expense-tracker-b91f4-default-rtdb.firebaseio.com/expenses/${id}.json`)
            ctx.addExpenses()
            console.log("successfuly deleted!")
        }
        catch(error){
        alert(error.response.data.error.message)
        }
}


    const ctx=useContext(Econtext)
    return (
        <>
         <Expense show={show} onHide={handleClose} expense={expense} />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {ctx.expenses.map((expense, index) => (
              <tr key={expense.id}>
                <td>{index + 1}</td>
                <td>{expense.Expensename}</td>
                <td>${expense.money}</td>
                <td><Button variant='info' onClick={handleShow.bind(null,expense)} > Edit</Button>
                {' '}
                <Button variant='danger' onClick={onDeletHandler.bind(null,expense.id)}>Delete</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
        </>
      );
    }
    
    

export default ExpenseList;
import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Econtext from '../store/econtext';
function ExpenseList() {
    const ctx=useContext(Econtext)
    return (
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
              </tr>
            ))}
          </tbody>
        </Table>
      );
    }
    
    

export default ExpenseList;
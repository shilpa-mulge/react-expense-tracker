import React,{useEffect, useState} from "react";
import { Button,Form, Modal } from "react-bootstrap";
import axios from "axios";
const Expense=(props)=>{
    const {Expensename}=props.expense;
    const {money}=props.expense;
    const{id}=props.expense;
    const [Ename, setName] = useState(Expensename);
    const [amount, setAmount] = useState(money);
useEffect(()=>{
    setAmount(money)
    setName(Expensename)
},[Expensename,money])

    const handleSubmit=async(event)=>{
        event.preventDefault();
        try{
            const response=await axios.put(`https://expense-tracker-b91f4-default-rtdb.firebaseio.com/expenses/${id}.json`,
                {ExpenseName:Ename, money:amount})
                props.onClick()
            }
            catch(error){
            alert(error)
            }
            props.onHide()
    }
 
    return (
        <>
        <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Expense</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={Ename}
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="amount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
    </>
    )
}
export default Expense;
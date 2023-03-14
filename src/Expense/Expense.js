import React,{useEffect, useState} from "react";
import { Button,Container,Form, Modal } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ExpenseActions } from "../store/ExpenseReducer";
const Expense=(props)=>{
    const {ExpenseName}=props.expense;
    const {money}=props.expense;
    const {description}=props.expense;
    const{id}=props.expense;
    const [Ename, setName] = useState(ExpenseName);
    const [amount, setAmount] = useState(money);
    const [Description, setDescription]=useState(description)
    const dispatch=useDispatch()
useEffect(()=>{
    setAmount(money)
    setName(ExpenseName)
    setDescription(description)
},[ExpenseName,money,description])

    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(ExpenseActions.EditExpenses ({id:id,ExpenseName:Ename, money:amount, description:Description}))
            props.onHide()
    }
 
    return (
        <>
      
        <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Expense</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="bg-info bg-opacity-50 w-100 " onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={Ename}
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={Description}
              onChange={(event) => setDescription(event.target.value)}
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
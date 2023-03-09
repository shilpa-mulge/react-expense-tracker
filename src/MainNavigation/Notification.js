import React,{useState} from 'react';
import { Alert } from 'react-bootstrap';
import classes from './Notification.module.css';
function Notification(props) {
  let item = localStorage.getItem('token');
let initial = JSON.parse(item);
const email=initial!==null?initial.emailId:'';
  const {  status, title, message } = props;
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <>
    {email && <Alert variant={status} dismissible onClose={() => setShow(false)} className={classes.alert}>
     <Alert.Heading>{title} </Alert.Heading> <p> {message}</p>
      </Alert>}
      </>
    )
  }
  return null;

}

export default Notification;


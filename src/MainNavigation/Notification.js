import React from 'react';
import { Alert } from 'react-bootstrap';

function Notification(props) {
  const {  status, title, message } = props;

  return (
    <Alert  variant={status} dismissible>
      {title && <Alert.Heading>{title}</Alert.Heading>}
      {message && <p>{message}</p>}
    </Alert>
  );
}

export default Notification;



import { Image,Button,Container } from 'react-bootstrap';
import classes from './Welcome.module.css';
import { useNavigate } from 'react-router-dom';
import Vector from '../Images/Vector.svg'
const Welcome=()=>{
   const Navigate=useNavigate();
    const onClickHandler=()=>{
Navigate('/login')
    }
    return(
    <Container  className={classes.container}>
       <h1>Welcome</h1>
       <h2> to Expense Tracker</h2>
       <p>Ever feel like you're throwing money away? Take control of your cashflow by logging what you've spent with this simple form </p>
    <Button variant='info' style={{width:'25%'}} onClick={onClickHandler}>Log an expense</Button>
    <Image fluid src={Vector}/>
    </Container>
    )
}
export default Welcome;
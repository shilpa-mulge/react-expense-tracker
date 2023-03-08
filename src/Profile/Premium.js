
import { useSelector, useDispatch } from 'react-redux';
import {toggleThemeaction}  from '../store/ThemeReducer';
import Button from 'react-bootstrap/Button';
import { theme } from '../theme';
import { Container } from 'react-bootstrap';
export default function Premium() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.currentTheme);

  const handleClick = () => {
    dispatch(toggleThemeaction.toggleTheme());
  };

  return (
    <Container style={{ backgroundColor: theme[mode].bodyBg, color: theme[mode].text,width:"100%" ,height:'100%', style:"border-spacing: 0"}}>
    <Button variant="primary" onClick={handleClick}>
      {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
    </Button>
    </Container>
  );
}





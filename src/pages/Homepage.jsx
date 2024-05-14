import React, {useState} from 'react';
import { Button, Form, Row, Col } from 'antd';
import '../style/homepage.css'
import LogInModal from '../components/Login.jsx';
import SignUpModal from '../components/Signup.jsx';
//import { Link } from 'react-router-dom';
function Homepage() {
    const [isModalLogInOpen, setIsModalLogInOpen] = useState(false);
    const [isModalSignUpOpen, setIsModalSignUpOpen] = useState(false);
  

    const showModalLogIn = () => {
        setIsModalLogInOpen(true);
    };
  
    const handleOkLogIn = () => {
        setIsModalLogInOpen(false);
    };
  
    const handleCancelLogIn = () => {
        setIsModalLogInOpen(false);
    };

    const showModalSingUp = () => {
        setIsModalSignUpOpen(true);
    };
  
    const handleOkSignUp = () => {
        setIsModalSignUpOpen(false);
    };
  
    const handleCancelSignUp = () => {
        setIsModalSignUpOpen(false);
    };

  return (
    <div className="homepage">
      <header className="App-header"></header>
      <div className='mainPart'>
        <h1 className='title'>Scandix</h1>
        <h3 className='slogan1'>Solve, Smile, Repeat.</h3>
        <h3 className='slogan2'>Where Crosswords Make Joy Complete!</h3>
          <Form className='buttons'>
            <Row>
              <Col>
                {/* <Link to="/login"> */}
                    <Button className='log-in-button' size='large' style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'white'}} onClick={showModalLogIn}>Log in</Button>
                {/* </Link> */}
              </Col>
              <Col>
                <Button className='sing-up-button' type='primary' size='large' style={{background:'#F7C873'}} onClick={showModalSingUp}>Sign up</Button>
              </Col>
            </Row>
          </Form>
        <LogInModal open={isModalLogInOpen} onOk={handleOkLogIn} onCancel={handleCancelLogIn}/>
        <SignUpModal open={isModalSignUpOpen} onOk={handleOkSignUp} onCancel={handleCancelSignUp}/>
     </div>
    </div>
  );
}
export default Homepage;
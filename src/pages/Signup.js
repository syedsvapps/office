import React,{ Component} from 'react';
import { Button,Form,Container,Row,Col} from 'react-bootstrap';
import axios from 'axios';
class Signup extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            name :'',
            email : '',
            password :'',
            confirmpassword :''
        };
      }

      handleInputChange = e => {
        this.setState({
          [e.target.name]: e.target.value,
  
        });
      };

      handleSubmit = e => {
        e.preventDefault();
        const {name,email,password,confirmpassword} = this.state;
        
        const passwords = {
          password,
          confirmpassword,
      };
      if(passwords.password!==passwords.confirmpassword)
      {
          alert("confirm Password should be same with password!!");
          return false;
      };
        var formData = {
            name,
            email,
            password,
        };
        return axios
        .post('http://restapi.adequateshop.com/api/authaccount/registration', { ...formData })
        .then((res) => {
          if(res.data.status==="200"){
              alert("Your regsitartion is successfully completed....");
              window.location.href='/signup';
          }else if(res.data.status==="600"){
              alert("Password do not match....");
          }else{
            alert("Email already registered....")
          }
        })
        .catch(err => {
          console.error(err);
          alert(err);

        });
    };
    
    render(){
        return (
            <Container>
            <Row>
            <Col xs={3}></Col>

            <Col xs={6}>
            <div className='signupform'>
            <h3 className='text-center'>Registration Form</h3>

            <Form onSubmit={(e)=>this.handleSubmit(e)} id="formElement">

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" onChange={this.handleInputChange} name="name" placeholder="Enter your Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" onChange={this.handleInputChange} name='email' placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={this.handleInputChange} name='password' placeholder="Enter Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" onChange={this.handleInputChange} name='confirmpassword' placeholder="Enter Confirm Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            </div>
            </Col>
         </Row>
         </Container>
          );
          
    }
}

export default Signup;

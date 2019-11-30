import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/Login.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



class Login extends Component {
    render() {

        return (
            <React.Fragment>
                    <div align="center" className="title-padding">
                        <h2>SkillFindr</h2>
                    </div>

                    <Form>
                        <Form.Row className="justify-content-center">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label column="false">Email address</Form.Label>
                            <Form.Control type="email"/>
                        </Form.Group>
                        </Form.Row>

                        <Form.Row className="justify-content-center">
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label column="true">Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        </Form.Row>

                        <div align="center">
                            <p>
                                New? Sign up <Link to="/signup"> here</Link>!
                            </p>
                        </div>

                        <Form.Row className="justify-content-center">
                            {/*// TODO: this will be how to make the button submit the form, implement later*/}
                            {/*<Button class="align-content-center" variant="primary" type="submit" href="/home">*/}
                            {/*    Log In*/}
                            {/*</Button>*/}

                            <Button className="align-content-center" variant="primary" href="/home">
                                Log In
                            </Button>
                        </Form.Row>
                    </Form>
            </React.Fragment>
        );
    }
}

export default Login;
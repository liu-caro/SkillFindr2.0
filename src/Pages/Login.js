import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/Login.css'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



class Login extends Component {
    render() {

        return (
            <html>
                <head>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossorigin="anonymous"
                    />
                </head>
                <body>
                    <div align="center" class="title-padding">
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
                            <Button class="align-content-center" variant="primary" type="submit" routerLink="/home">
                                Log In
                            </Button>
                        </Form.Row>
                    </Form>
                </body>
            </html>
        );
    }
}

export default Login;
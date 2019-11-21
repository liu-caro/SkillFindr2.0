import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/Login.css'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
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
                        <h2>Skill Findr</h2>
                    </div>

                    <div class="input-padding">
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Email</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </div>

                    <div class="input-padding">
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Password</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </div>
                
                    <div align="center">
                        <p>
                            New? Sign up <Link to="/signup"> here</Link>!
                        </p>
                    
                        <button class="btn btn-primary" routerLink="/home">
                            Log in
                        </button>
                    </div>
                </body>
            </html>
        );
    }
}

export default Login;
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/SignUp.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import ListGroup from 'react-bootstrap/ListGroup'
import Octicon, { ArrowLeft } from '@primer/octicons-react'


class CreateEvent extends Component {
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
                    <Container fluid="true">
                        <Row>
                            <button class="btn btn-primary" routerLink="/home">
                                <Octicon icon={ArrowLeft} size='small' ariaLabel='arrow' />
                            </button>
                            <div class="title">
                                <h1>Create Event</h1>
                            </div>
                        </Row>
                    </Container>

                    <div class="input">
                        <ListGroup>
                            <ListGroup.Item>
                                <InputGroup size="sm">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </InputGroup>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <InputGroup size="sm">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-default">Email</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </InputGroup>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <InputGroup size="sm">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-default">Password</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </InputGroup>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <InputGroup size="sm">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-default">Confirm Password</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </InputGroup>
                            </ListGroup.Item>
                            </ListGroup>
                        </div>

                    <Container fluid="true">
                        <Row>
                            <Col xs={6}>
                                <button block="true" class="btn btn-primary block" routerLink="/sign-up">
                                    Cancel
                                </button>
                            </Col>
                            <Col xs={6}>
                                <button type="button" class="btn btn-primary block" routerLink="/profile">
                                    Next
                                </button>
                            </Col>
                        </Row>

                    </Container>
                </body>
            </html>
        );
    }
}

export default CreateEvent;
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/SignUp.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Octicon, { ArrowLeft } from '@primer/octicons-react'



class CreateProfile extends Component {
    render() {

        return (

            <React.Fragment>
                    <Container fluid="true">
                        <Row>
                            <Button class="btn btn-primary" href="/login">
                                <Octicon icon={ArrowLeft} size='small' ariaLabel='arrow' />
                            </Button>
                            <div class="title">
                                <h1>Create Profile</h1>
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
                                        placeholder="Jane Doe"
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </InputGroup>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <InputGroup size="sm">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-default">Bio</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="I am a programmer sometimes."
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </InputGroup>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <InputGroup size="sm">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-default">Skills</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="HTML, CSS, JS, Photoshop, ect."
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
                                <Button block="true" class="btn btn-primary block" href="/login">
                                    Cancel
                                </Button>
                            </Col>
                            <Col xs={6}>
                                <Button block="true" class="btn btn-primary block" href="/profile">
                                    Create Profile
                                </Button>
                            </Col>
                        </Row>

                    </Container>
            </React.Fragment>
        );
    }
}

export default CreateProfile;
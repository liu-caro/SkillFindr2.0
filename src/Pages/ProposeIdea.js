import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import ListGroup from 'react-bootstrap/ListGroup'
import HackBeanpot from '../Images/hackBeanPot.png';
import Octicon, { ArrowLeft } from '@primer/octicons-react'



class ProposeIdea extends Component {
    render() {

        return (
            <React.Fragment>
                <Container fluid="true">
                    <Row>
                        <Button className="btn btn-primary" href="/login">
                            <Octicon icon={ArrowLeft} size='small' ariaLabel='arrow' />
                        </Button>
                        <div className="title">
                            <h1>Propose an Idea</h1>
                        </div>
                    </Row>
                </Container>

                <div className="input">
                    <ListGroup>
                        <ListGroup.Item>
                            <InputGroup size="sm">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-default">Name of Project</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="Jane Doe"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <InputGroup size="med">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-default">Description</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    as="textarea"
                                    placeholder="I sure do want to make something."
                                    aria-label="With textarea"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <InputGroup size="sm">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-default">Number of Team Member</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="2-5"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <InputGroup size="sm">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-default">Skills Needed</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="HTML, CSS, JS, ect."
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <InputGroup size="sm">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-default">Your Role</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="Back-end, Databases, ect."
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
                            <Button block="true" className="btn btn-secondary block" href="/event">
                                Cancel
                                </Button>
                        </Col>
                        <Col xs={6}>
                            <Button block="true" className="btn btn-primary block" href="/your-idea">
                                Create Profile
                                </Button>
                        </Col>
                    </Row>

                </Container>
            </React.Fragment>
        );
    }
}

export default ProposeIdea;
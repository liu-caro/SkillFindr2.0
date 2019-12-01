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
import Form from 'react-bootstrap/Form'
import HackBeanpot from '../Images/hackBeanPot.png';
import Octicon, { ArrowLeft } from '@primer/octicons-react'
import {Link} from "react-router-dom";



class RegisterEvent extends Component {
    render() {

        return (

            <React.Fragment>
                <Container fluid="true">
                    <Row className="titlePadding">
                        <Button variant="outline-primary" type="button" href="/home">
                            <Octicon icon={ArrowLeft} size='medium' ariaLabel='arrow' />
                        </Button>

                        <div className="title">
                            <h1>Register Event</h1>
                        </div>
                    </Row>

                    <Form>
                        <Form.Group as={Col} controlId="formBasicName">
                            <Form.Label as="legend">
                                Do you have a team?
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="No, I am working alone"
                                    name="haveATeam"
                                    id="formHorizontalRadios1"
                                />
                                <Form.Check
                                    type="radio"
                                    label="No, I am looking for a team"
                                    name="haveATeam"
                                    id="formHorizontalRadios2"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Yes, I have a team"
                                    name="haveATeam"
                                    id="formHorizontalRadios3"
                                />
                            </Col>
                        </Form.Group>
                        
                        <Form.Group as={Col} controlId="formBasicName">
                            <Form.Label as="legend">
                                How did you hear about this event?
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="Facebook"
                                    name="hearAboutEvent"
                                    id="formHorizontalRadios4"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Twitter"
                                    name="hearAboutEvent"
                                    id="formHorizontalRadios5"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Event Website"
                                    name="hearAboutEvent"
                                    id="formHorizontalRadios6"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Other"
                                    name="hearAboutEvent"
                                    id="formHorizontalRadios7"
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formBasicDescription">
                            <Form.Label>
                                If you selected other, please write in where you heard about the event here:
                            </Form.Label>
                            <Form.Control type="description" />
                        </Form.Group>
                    </Form>

                </Container>

                <Container fluid="true">
                    <Row>
                        <Col xs={6}>
                            <Button block="true"  href="/event">
                                Cancel
                            </Button>
                        </Col>
                        <Col xs={6}>
                            <Link to={{
                                pathname: "/event",
                                state: {
                                    isRegistered: true
                                }
                            }}>
                            <Button block="true">
                                Register
                            </Button>
                            </Link>
                        </Col>
                    </Row>

                </Container>

            </React.Fragment>
        );
    }
}

export default RegisterEvent;
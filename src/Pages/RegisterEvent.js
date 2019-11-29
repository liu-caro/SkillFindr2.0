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



class RegisterEvent extends Component {
    render() {

        return (

            <React.Fragment>
                <Container fluid="true">
                    <Row>
                        <Button class="btn btn-primary" href="/home">
                            <Octicon icon={ArrowLeft} size='small' ariaLabel='arrow' />
                        </Button>
                        <div class="title">
                            <h1>Register Event</h1>
                        </div>
                    </Row>

                    <Row style={{ paddingTop: '25px', paddingLeft: '25px' }}>
                        <p>Do you have a team?</p>
                    </Row>
                    <Row style={{ paddingLeft: '25px' }}>
                        <div className="form-check">
                            <label>
                                <input
                                    type="radio"
                                    name="react-tips"
                                    value="option1"
                                    className="form-check-input"
                                />
                                No, I am working alone
                            </label>
                        </div>
                    </Row>
                    <Row style={{ paddingLeft: '25px' }}>
                        <div className="form-check">
                            <label>
                                <input
                                    type="radio"
                                    name="react-tips"
                                    value="option2"
                                    className="form-check-input"
                                />
                                No, I am looking for a team
                            </label>
                        </div>
                    </Row>
                    <Row style={{ paddingLeft: '25px' }}>
                        <div className="form-check">
                            <label>
                                <input
                                    type="radio"
                                    name="react-tips"
                                    value="option3"
                                    className="form-check-input"
                                />
                                Yes, I have a team
                            </label>
                        </div>
                    </Row>

                    <Row style={{ paddingTop: '25px', paddingLeft: '25px' }}>
                        <p>How did you hear about this event></p>
                    </Row>
                    <Row style={{ paddingLeft: '25px' }}>
                        <div className="form-check">
                            <label>
                                <input
                                    type="radio"
                                    name="another"
                                    value="option1"
                                    className="form-check-input"
                                />
                                Facebook
                            </label>
                        </div>
                    </Row>
                    <Row style={{ paddingLeft: '25px' }}>
                        <div className="form-check">
                            <label>
                                <input
                                    type="radio"
                                    name="another"
                                    value="option2"
                                    className="form-check-input"
                                />
                                Twitter
                            </label>
                        </div>
                    </Row>
                    <Row style={{ paddingLeft: '25px' }}>
                        <div className="form-check">
                            <label>
                                <input
                                    type="radio"
                                    name="another"
                                    value="option3"
                                    className="form-check-input"
                                />
                                Event Website
                            </label>
                        </div>
                    </Row>
                    
                    <Row style={{ paddingLeft: '25px' }}>
                        <div className="form-check">
                            <label>
                                <input
                                    type="radio"
                                    name="another"
                                    value="option4"
                                    className="form-check-input"
                                />
                                Other
                            </label>
                        </div>
                    </Row>

                    <Row style={{ paddingLeft: '25px', paddingRight: '25px', paddingBottom: '25px' }}>
                        If you selected other, please write in where you heard about the event here:
                         <InputGroup size="sm">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Enter Input</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </Row>
                </Container>

                <Container fluid="true">
                    <Row>
                        <Col xs={6}>
                            <Button block="true" class="btn btn-primary block" href="/home">
                                Cancel
                            </Button>
                        </Col>
                        <Col xs={6}>
                            <Button block="true" class="btn btn-primary block" href="/event" onclick="change()">
                                Register
                            </Button>
                        </Col>
                    </Row>

                </Container>

            </React.Fragment>
        );
    }
}

export default RegisterEvent;
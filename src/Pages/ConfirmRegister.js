import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/Login.css'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Octicon, { ArrowLeft } from '@primer/octicons-react'




class ConfirmRegister extends Component {
    render() {

        return (
            <React.Fragment>
                <Row>
                    <Col >
                        <button class="btn btn-primary" routerLink="/home">
                            <Octicon icon={ArrowLeft} size='small' ariaLabel='arrow' />
                        </button>
                    </Col>
                    <Col >
                        <Tabs defaultActiveKey="event">
                            <Tab eventKey="event" title="Event">

                            </Tab>
                            <Tab eventKey="ideas" title="Ideas">

                            </Tab>
                            <Tab eventKey="attendees" title="Attendees">

                            </Tab>
                        </Tabs>
                    </Col>
                    <Col/>
                </Row>

                <div align="center" class="title-padding">
                    <h2>Register for HackBeanPot?</h2>
                </div>

                <Form >
                    <div align="center">Do you have a team?</div>
                    <Form.Row className="justify-content-center">
                        {['checkbox'].map(type => (
                            <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label={'No, I plan on workng alone.'}
                                />

                                <Form.Check
                                    type={type}
                                    id={`default-${type}-here`}
                                    label={'No, I am looking for a team.'}
                                />

                                <Form.Check
                                    type={type}
                                    id={`default-${type}-here`}
                                    label={'Yes, I am apart of a team.'}
                                />
                            </div>
                        ))}
                    </Form.Row>
                    <div align="center">How did you hear about this event?</div>
                    <Form.Row className="justify-content-center">
                        {['checkbox'].map(type => (
                            <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label={'Twitter'}
                                />

                                <Form.Check
                                    type={type}
                                    id={`default-${type}-here`}
                                    label={'Facebook'}
                                />

                                <Form.Check
                                    type={type}
                                    id={`default-${type}-here`}
                                    label={'Friends/Co-workers'}
                                />
                                <Form.Check
                                    type={type}
                                    id={`default-${type}-here`}
                                    label={'Skill Findr'}
                                />
                                 <Form.Check
                                    type={type}
                                    id={`default-${type}-here`}
                                    label={'Other'}
                                />
                            </div>
                        ))}
                    </Form.Row>
                </Form>
                <Button class="justify-content-center" variant="primary" href="/event">
                                Register
                            </Button>

            </React.Fragment>
        );
    }
}

export default ConfirmRegister;
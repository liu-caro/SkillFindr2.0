import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import HackBeanpot from '../Images/hackBeanPot.png';
import Octicon, { ArrowLeft } from '@primer/octicons-react'



class Event extends Component {
    render() {

        return (

            <React.Fragment>
                    <Container fluid="true">
                        <Row>
                            <Col >
                            <Button class="btn btn-primary" href="/home">
                                    <Octicon icon={ArrowLeft} size='small' ariaLabel='arrow' />
                            </Button>
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
                        <Row>
                            <h1>HackBeanpot</h1>
                        </Row>
                        <Row>
                            <Col/>
                                <img src={HackBeanpot} alt="HackBeanpot"/>
                            <Col/>
                        </Row>
                        <Row>
                            <Col/>
                            <Button class="btn btn-primary" href="/register">Register</Button>
                            <Col/>
                        </Row>
                        <Row>
                            <Col/>
                            <Button class="btn btn-primary" href="/propose-idea">Create Team</Button>
                            <Col/>
                        </Row>
                        <Row>
                            <Col/>
                                <p>
                                    An independently-run Boston hackathon for curious students,
                                    hackers, makers, and beginners.
                                </p>
                            <Col/>
                        </Row>
                    </Container>

            </React.Fragment>
        );
    }
}

export default Event;
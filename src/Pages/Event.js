import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HackBeanpot from '../Images/hackBeanPot.png';
import Octicon, { ArrowLeft } from '@primer/octicons-react'



class Event extends Component {
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
                            <Col></Col>
                        </Row>
                        <Row>
                            <h1>HackBeanpot</h1>
                        </Row>
                        <Row>
                            <Col></Col>
                                <img src={HackBeanpot} alt="HackBeanpot"></img>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col></Col>
                            <button class="btn btn-primary" routerLink="/register">Register</button>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col></Col>
                            <button class="btn btn-primary" routerLink="/propose-idea">Create Team</button>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col></Col>
                                <p>
                                    An independently-run Boston hackathon for curious students,
                                    hackers, makers, and beginners.
                                </p>
                            <Col></Col>
                        </Row>
                    </Container>
                   
                </body>
            </html>
        );
    }
}

export default Event;
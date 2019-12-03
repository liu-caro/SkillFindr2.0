import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/Event.css'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import HackBeanpot from '../Images/hackBeanPot.png';
import Octicon, { ArrowLeft, Person } from '@primer/octicons-react'



class Event extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {isRegistered: false};
    // }

    render() {

        const data = this.props.location.state;

        return (

            <React.Fragment>
                <Container fluid="true">
                    <Row className="titlePadding">
                        <Col>
                            <Button variant="outline-primary" type="button" href="/home">
                                <Octicon icon={ArrowLeft} size='medium' ariaLabel='arrow' />
                            </Button>
                        </Col>

                        <Col>
                            <Nav className="justify-content-center" fill="true" variant="pills" activeKey="event">
                                <Nav.Item>
                                    <Nav.Link eventKey="event" href="/event">Event</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="ideas" href="/ideas">Ideas</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="attendees" href="/attendees">Attendees</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>

                        <Col>
                            <div className="float-right">
                                <Button type="button" href="/profile">
                                    <Octicon icon={Person} size='medium' ariaLabel='Person' />
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col />

                        <Col>
                            <h1>HackBeanpot</h1>
                        </Col>
                        
                        <Col>
                            <Badge pill="true" style={{ padding:'15px' }} variant="primary">
                                # of Attendees
                            </Badge>
                        </Col>
                    </Row>
                    <Row>
                        <Col/>
                            <img src={HackBeanpot} alt="HackBeanpot"/>
                        <Col/>
                    </Row>

                    <Row>
                        <p>Submissions open from <b>START DATE</b> to <b>END DATE</b></p>
                    </Row>

                    <Row className="mb-2">

                        <Col />
                    
                        {/*{console.log(this.props.location.state)}*/}

                        { data ?
                            (<Button variant="light" size="lg" href="/register" disabled> Registered</Button>) :
                            (<Button className="btn btn-primary" size="lg" href="/register"> Register </Button>)}

                        
                        <Col />
                    </Row>
                    <Row className="mb-2">
                        <Col/>
                        { data ?
                            (<Button size="lg" href="/create-idea">Create Team</Button>) : (<div/>)
                            }

                        <Col/>
                    </Row>

                    <div className="divider" />

                    <Row>
                        <h1>LOCATION</h1>
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
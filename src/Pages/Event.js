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
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';



class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: this.props.location.state.eventName,
            location: this.props.location.state.location,
            startDate: this.props.location.state.startDate,
            startTime: this.props.location.state.startTime,
            endDate: this.props.location.state.endDate,
            endTime: this.props.location.state.endTime,
            descrip: this.props.location.state.descrip,
            attendees: this.props.location.state.attendees,
            eventId: this.props.location.state.eventId
        };

    }

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
                                <LinkContainer to={{
                                    pathname: '/event',
                                    state: {
                                        eventId: this.state.eventId,
                                        eventName: this.state.eventName,
                                        location: this.state.location,
                                        startDate: this.state.startDate,
                                        startTime: this.state.startTime,
                                        endDate: this.state.endDate,
                                        endTime: this.state.endTime,
                                        descrip: this.state.descrip,
                                        attendees: this.state.attendees
                                    }}}>
                                    <Nav.Link>Event</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to={{
                                    pathname: '/ideas',
                                    state: {
                                        eventId: this.state.eventId,
                                        eventName: this.state.eventName,
                                        location: this.state.location,
                                        startDate: this.state.startDate,
                                        startTime: this.state.startTime,
                                        endDate: this.state.endDate,
                                        endTime: this.state.endTime,
                                        descrip: this.state.descrip,
                                        attendees: this.state.attendees
                                    }}}>
                                    <Nav.Link>Ideas</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to={{
                                    pathname: '/attendees',
                                    state: {
                                        eventId: this.state.eventId,
                                        eventName: this.state.eventName,
                                        location: this.state.location,
                                        startDate: this.state.startDate,
                                        startTime: this.state.startTime,
                                        endDate: this.state.endDate,
                                        endTime: this.state.endTime,
                                        descrip: this.state.descrip,
                                        attendees: this.state.attendees
                                    }}}>
                                    <Nav.Link>Attendees</Nav.Link>
                                </LinkContainer>

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
                        <img src={HackBeanpot} alt="HackBeanpot" />
                        <Col />
                    </Row>

                    <div className="divider" />

                    <Row>
                        <Col />

                        <Col>

                            <h1 style={{ textAlign: 'left' }}>{this.state.eventName}</h1>
                        </Col>
                        
                        <Col>
                            <Badge pill="true" style={{ padding: '15px', textAlign: 'right' }} variant="primary">
                                {this.state.attendees} Attendees
                            </Badge>
                        </Col>
                    </Row>

                    <Row>
                        <Col />
                        <Col>
							<p className="pdesE" style={{ textAlign: 'left' }}>Submissions open from <b>{this.state.startDate}</b> to <b>{this.state.endDate}</b></p>
                        </Col>
                        <Col />
                    </Row>

                    <Row>
                        <Col />
                        <Col>
                            <p className="pdesE" style={{ textAlign: 'left' }}>{this.state.location}</p>
                        </Col>
                        <Col />
                    </Row>

                    <Row>
                        <Col/>
                        <p className="pdes">
                                {this.state.descrip}
                            </p>
                        <Col/>

                    </Row>

                    <Row className="mb-2">

                        <Col />



                        {data ?
                            (<Button variant="light" size="lg" href="/register" disabled> Registered</Button>) :
                            (<Button className="btn btn-primary" size="lg" href="/register"> Register </Button>)}


                        <Col />
                    </Row>

                    <Row className="mb-2">
                        <Col />
                        {data ?
                            (   <Link to={{
                                    pathname: '/create-idea',
                                    state: {
                                        eventId: this.state.eventId
                                    }
                                }}>
                                 <Button size="lg" href="/create-idea">Create Team</Button>
                            </Link>) : (<div />)
                        }

                        <Col />

                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Event;
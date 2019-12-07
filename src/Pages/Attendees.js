import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/Home.css'
import '../Stylesheets/ideas.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'
import SearchBar from '../Pages/SearchBar'
import Cari from '../Images/cari.jpeg';
import Jamie from '../Images/jamie.jpeg';
import Cam from '../Images/cam.jpeg';
import Boba from '../Images/boba.jpg';
import Octicon, { Person, ArrowLeft } from '@primer/octicons-react';
import Button from 'react-bootstrap/Button';
import {LinkContainer} from 'react-router-bootstrap';



class Attendees extends Component {

    constructor(props) {
        super(props);
        this.state = {
            eventId: this.props.location.state.eventId,
            eventName: this.props.location.state.eventName,
            location: this.props.location.state.location,
            startDate: this.props.location.state.startDate,
            startTime: this.props.location.state.startTime,
            endDate: this.props.location.state.endDate,
            endTime: this.props.location.state.endTime,
            descrip: this.props.location.state.descrip,
            attendees: this.props.location.state.attendees
        };
    }

    render() {
        return (
            <React.Fragment>
                <Container fluid="true">
                <Row className="titlePadding">
                    <Col >
                        <Button variant="outline-primary" type="button" href="/home">
                            <Octicon icon={ArrowLeft} size='medium' ariaLabel='arrow' />
                        </Button>
                    </Col>

                    <Col >
                        <Nav className="justify-content-center" fill="true" variant="pills" activeKey="attendees">
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
                    <SearchBar />
                </Row>
                </Container>
                <ListGroup>
                    <ListGroup.Item action href="/indv-attendee">
                    <Row>
                        <Col xs={2}>
                            <Image src={Cari} thumbnail="true" alt="hackbeanpot" />
                        </Col>
                        <Col xs={10}>
                            <h1>Caroline Liu</h1>

                        </Col>
                    </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <Row>
                        <Col xs={2}>
                            <Image src={Jamie} thumbnail="true" alt="hackbeanpot" />
                        </Col>
                        <Col xs={10}>
                            <h1>Jamie Camera</h1>

                        </Col>
                    </Row>
                    </ListGroup.Item>

                    <ListGroup.Item >
                    <Row>
                        <Col xs={2}>
                            <Image src={Cam} thumbnail="true" alt="hackbeanpot" />
                        </Col>
                        <Col xs={10}>
                            <h1>Cameron Perry</h1>

                        </Col>
                    </Row>
                    
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <Row>
                        <Col xs={2}>
                            <Image src={Boba} thumbnail="true" alt="hackbeanpot" />
                        </Col>
                        <Col xs={10}>
                            <h1>Boba Speedboat</h1>
                        </Col>
                    </Row>
                        
                    </ListGroup.Item>

                </ListGroup>
            </React.Fragment>
        );
    }
}

export default Attendees;
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import '../Stylesheets/IndvIdea.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import HackBeanpot from '../Images/hackBeanPot.png';
import Octicon, { ArrowLeft, Person } from '@primer/octicons-react'
import {Link} from "react-router-dom";



class IdeaDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ideaName: this.props.location.state.ideaName,
            descrip: this.props.location.state.descrip,
            teamSize: this.props.location.state.teamSize,
            skills: this.props.location.state.skills,
            role: this.props.location.state.role
        };

    }

    render() {



        return (

            <React.Fragment>
                <Container fluid="true">
                    <Row className="titlePadding">
                        <Col>
                            <Button variant="outline-primary" type="button" href="/ideas">
                                <Octicon icon={ArrowLeft} size='medium' ariaLabel='arrow' />
                            </Button>
                        </Col>

                        {console.log(this.state)}

                        <Col>
                            <Nav className="justify-content-center" fill="true" variant="pills" activeKey="ideas">
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
                </Container>

                <Row>
                    <h1>{this.state.ideaName}</h1>
                </Row>

                <Row>
                    <Col align="center">
              
                        <p>
                          {this.state.descrip}
                        </p>
                    </Col>
                 </Row>

                 <Row>
                    <h1>Skills requested:</h1>
                </Row>

                <Row>
                    {this.state.skills.map(skill =>
                        <Col xs={6} key={skill}>
                            <div className="skill-list">
                                <Badge variant="secondary">{skill}</Badge>
                            </div>
                        </Col>)
                    }
                </Row>

                <div className="divider" />
                
                <Row className="justify-content-center">
                    <Button className="align-content-center" size="lg" variant="primary" href="/event">
                        Join Team
                        </Button>
                </Row>

            </React.Fragment>
        );
    }
}

export default IdeaDetails;
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



class IdeaDetails extends Component {
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
                            <Button variant="outline-primary" type="button" href="/ideas">
                                <Octicon icon={ArrowLeft} size='medium' ariaLabel='arrow' />
                            </Button>
                        </Col>

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
                    <h1>Salem</h1>
                </Row>

                <Row>
                    <Col align="center">
              
                        <p>
                          A improv card game based around witches in Salem.
                        </p>
                    </Col>
                 </Row>

                 <Row>
                    <h1>Skills requested:</h1>
                </Row>


                 <Row>
                     <Col xs={6}>
                         <div class = "skill-list">
                            <Badge variant="secondary">Back-End</Badge>
                         </div>
                     </Col>
                     <Col xs={6}>
                         <div class = "skill-list">             
                            <Badge variant="secondary">Designer</Badge>
                         </div>
                     </Col>

                     <Col xs={6}>
                         <div class = "skill-list">
                            <Badge variant="secondary">2D Art</Badge>
                         </div>
                     </Col>
                     <Col xs={6}>
                        <div class="skill-list">
                            <Badge variant="secondary">Tech Art</Badge>
                         </div>
                     </Col>
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
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import '../Stylesheets/IndvIdea.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Popup from "reactjs-popup";
import Form from 'react-bootstrap/Form'
import Confirmation from './Confirmation'
import Octicon, { ArrowLeft, Person } from '@primer/octicons-react'

class IdeaDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ideaName: this.props.location.state.ideaName,
            descrip: this.props.location.state.descrip,
            teamSize: this.props.location.state.teamSize,
            skills: this.props.location.state.skills,
            role: this.props.location.state.role,
            popValue: ''
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
              
                        <p className="pdes">
                          {this.state.descrip}
                        </p>
                    </Col>
                 </Row>

                 <Row>
                    <h2>Skills requested:</h2>
                </Row>

                <Row>
                    {this.state.skills.map(skill =>
                        <Col xs={6} key={skill}>
                            <div className="skill-list">
                                <Badge variant="secondary"><h3>{skill}</h3></Badge>
                            </div>
                        </Col>)
                    }
                </Row>

                <div className="divider" />
                
                <Row className="justify-content-center">
                    <Popup trigger={
                        <Button className="align-content-center" size="lg" variant="primary">
                            Join Team
                        </Button>} modal>
                        {close => (

                            <div className="containerIdea">
                                <div className="titleIdea">Join {this.state.ideaName} Team?</div>
                                
                                <div className="subIdea">Skills Requested:</div>
                                
                                <Row className="checkIdeas">
                                    {this.state.skills.map(skill =>
                                        <Col xs={6} key={skill}>
                                            <Form.Group controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label={skill} />
                                            </Form.Group>
                                        </Col>
                                    )}
                                </Row>
                                
                                

                                <Form.Group as={Col} controlId="formBasicMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control name="message" type="text" as="textarea" placeholder="Hi! I think I would be a great fit for your team! Check out my profile and see if I'm a good fit!" />
                                </Form.Group>

                                <Form.Row className="sidePadding">
                                    <Col xs={6}>
                                        <Button variant="secondary" size="lg" block="true" onClick={() => { close();}}>
                                            Cancel
                                    </Button>
                                    </Col>

                                    <Col xs={6}>
                                        <Popup
                                            trigger={
                                                <Button variant="primary" type="submit" size="lg" block="true">
                                                    Send
                                                </Button>}
                                            modal
                                        >
                                            <div className="containerIdea">
                                                <div className="titleIdea">
                                                    Your request has been sent to the {this.state.ideaName} Team
                                                </div>

                                                <div className="divider" />

                                                <div className="subIdea">
                                                    Check back later to see if you were accepted onto the team!
                                                </div>

                                                <div className="divider" />
                                    
                                                <Form.Row className="sidePadding">
                                                    <Col xs={6}>
                                                        <Button variant="secondary" type="submit" size="lg" block="true"
                                                            onClick={() => {
                                                                close();
                                                            }}
                                                        >
                                                            Return to Ideas
                                                        </Button>
                                                    </Col>

                                                    <Col xs={6}>
                                                        <Button variant="primary" size="lg" block="true" href="/edit-profile">
                                                            Update Profile
                                                        </Button>
                                                    </Col>

                                                </Form.Row>
                                            </div>
                                        </Popup>
                                    </Col>
                                </Form.Row>
                            </div>
                        )}
                    </Popup>
                </Row>

            </React.Fragment>
        );
    }
}

export default IdeaDetails;
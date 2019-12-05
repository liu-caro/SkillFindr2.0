import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/Event.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Octicon, { ArrowLeft } from '@primer/octicons-react'
import Firebase from '../firebase'
import { Link } from "react-router-dom";



class CreateIdea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ideaName: '',
            descrip: '',
            teamSize: 1,
            skills: '',
            role: '',
            eventId: this.props.location.state.eventId
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const ideasRef = Firebase.database().ref('ideas' + this.state.eventId);
        const idea = {
            ideaName: this.state.ideaName,
            descrip: this.state.descrip,
            teamSize: this.state.teamSize,
            skills: this.state.skills,
            role: this.state.role,
            members: 1
        };
        ideasRef.push(idea);
        this.setState({
            ideaName: '',
            descrip: '',
            teamSize: '',
            skills: '',
            role: ''
        });
        this.props.history.push({
            pathname: '/idea-details',
            state: {
                ideaName: this.state.ideaName,
                descrip: this.state.descrip,
                teamSize: this.state.teamSize,
                skills: this.state.skills.split(', '),
                role: this.state.role
            }
        });
    }

    render() {

        return (
            <React.Fragment>
                <Container fluid="true">
                    <Row className="titlePadding">
                        <Button style={{ paddingTop: '10px' }} variant="outline-primary" type="button" href="/ideas">
                            <Octicon icon={ArrowLeft} size='medium' ariaLabel='arrow' />
                        </Button>

                        <div className="title">
                            <h1>Create Idea</h1>
                        </div>
                    </Row>
                </Container>

                <div className="divider" />

                <Form>
                    <Form.Group as={Col} controlId="formBasicName">
                        <Form.Label>Name of Project Idea</Form.Label>
                         <Form.Control name="ideaName" placeholder="Coolest Project Ever" type="text" onChange={this.handleChange} value={this.state.ideaName} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control name="descrip" as="textarea" placeholder="A web app to find hackathon team members" type="text" onChange={this.handleChange} value={this.state.descrip} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formBasicTeam">
                        <Form.Label>Number of Team Members</Form.Label>
                        <Form.Control name="teamSize" type="number" onChange={this.handleChange} value={this.state.teamSize} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formBasicSkills">
                        <Form.Label>Skills Needed</Form.Label>
                        <Form.Control name="skills" type="text" as="textarea" placeholder="Front-End, Full Stack, Artist" onChange={this.handleChange} value={this.state.skills} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formBasicRole">
                        <Form.Label>Your Role</Form.Label>
                        <Form.Control name="role" type="text" placeholder="Front-End, Back-End, UI/UX Designer"onChange={this.handleChange} value={this.state.role} />
                    </Form.Group>

                    <Form.Row className="sidePadding">
                        <Col xs={6}>
                            <Button variant="secondary" size="lg" block="true" href="/ideas">
                                Cancel
                            </Button>
                        </Col>

                        <Col xs={6}>
                            <Button variant="primary" type="submit" size="lg" block="true" onClick={this.handleSubmit}>
                                Submit
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </React.Fragment>


        );
    }
}

export default CreateIdea;
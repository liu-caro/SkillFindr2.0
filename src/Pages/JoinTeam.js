import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/IndvIdea.css'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Popup from "reactjs-popup";
import Confirmation from './Confirmation'
import Alert from 'react-bootstrap/Alert'
import HackBeanpot from '../Images/hackBeanPot.png';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Octicon, { Search } from '@primer/octicons-react'

class JoinTeam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: this.props.location.state.skills,
        };

    }
    render() {
        return (
            <React.Fragment >
               Skills you have:
                        {this.state.skills.map(skill =>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label={skill} />
                            </Form.Group>
                            )
                        }

                        <Form.Group as={Col} controlId="formBasicMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control name="message" type="text" placeholder="Hi! I think I would be a great fit for your team! Check out my profile here: !" />
                        </Form.Group>
                        
                        <Form.Row className="sidePadding">
                            <Col xs={6}>
                                <Button variant="secondary" size="lg" block="true" href="/idea-details">
                                    Cancel
                            </Button>
                            </Col>

                            <Col xs={6}>
                                <Popup
                                    trigger={
                                        <Button variant="primary" type="submit" size="lg" block="true">
                                            Send
                                        </Button>}
                                    position="top right"
                                    closeOnDocumentClick
                                >
                                    <Confirmation />
                                </Popup>
                            </Col>
                        </Form.Row>
            </React.Fragment >
        );
    }
}

export default JoinTeam;
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
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         eventName: ''
    //     };
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // componentWillMount() {
    //     // console.log(Firebase.database().ref('events').orderByKey().limitToLast(100));
    // }

    // handleChange(e) {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });
    //     // console.log(Firebase.database().ref('events'));
    // }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     const itemsRef = Firebase.database().ref('events');
    //     const item = {
    //         eventName: this.state.eventName,
    //     };
    //     itemsRef.push(item);
    //     this.setState({
    //         eventName: ''
    //     });
    //     this.props.history.push("/event")
    // }

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

                {/*<Form onSubmit={this.handleSubmit}>*/}
                <Form>
                    <Form.Group as={Col} controlId="formBasicName">
                        <Form.Label>Name of Project</Form.Label>
                        <Form.Control type="text"/>
                        {/* <Form.Control name="eventName" type="text" onChange={this.handleChange} value={this.state.eventName} /> */}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formBasicDescription">
                        <Form.Label>Decription</Form.Label>
                        <Form.Control as="textarea" type="text" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formBasicTeam">
                        <Form.Label>Number of Team Members</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formBasicSkills">
                        <Form.Label>Skills Needed</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formBasicRole">
                        <Form.Label>Your Role</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Row className="sidePadding">
                        <Col xs={6}>
                            <Button variant="secondary" size="lg" block="true" href="/ideas">
                                Cancel
                            </Button>
                        </Col>

                        <Col xs={6}>
                            <Button variant="primary" type="submit" size="lg" block="true" href="/indv-idea">
                                Submit
                            </Button>
                            {/* <Button variant="primary" type="submit" size="lg" block="true" onClick={this.handleSubmit}>
                                Submit
                            </Button> */}
                        </Col>
                    </Form.Row>
                </Form>
            </React.Fragment>


        );
    }
}

export default CreateIdea;
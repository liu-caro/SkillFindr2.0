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



class EditProfile extends Component {
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
                        <Button style={{ paddingTop: '10px' }} variant="outline-primary" type="button" href="/profile">
                            <Octicon icon={ArrowLeft} size='medium' ariaLabel='arrow' />
                        </Button>

                        <div className="title">
                            <h1>Edit Profile</h1>
                        </div>
                    </Row>
                </Container>

                <div className="divider" />

                {/*<Form onSubmit={this.handleSubmit}>*/}
                <Form>
                    <Form.Group as={Col} controlId="formBasicName">
                        <Form.Label>Name </Form.Label>
                        <Form.Control type="text" placeholder="Jamie Camera"/>
                        {/* <Form.Control name="eventName" type="text" onChange={this.handleChange} value={this.state.eventName} /> */}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formBasicDescription">
                        <Form.Label>Bio</Form.Label>
                        <Form.Control
                            as="textarea" 
                            placeholder="I am a junior at Northeastern university pursuing a degree 
                            in computer science and game development." 
                            type="text" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formBasicSkill">
                        <Form.Label>Skills</Form.Label>
                        <Form.Control placeholder="C#, C++, Game Design" type="skills" />
                    </Form.Group>


                    <Form.Row className="sidePadding">
                        <Col xs={6}>
                            <Button variant="secondary" size="lg" block="true" href="/profile">
                                Cancel
                            </Button>
                        </Col>

                        <Col xs={6}>
                            <Button variant="primary" type="submit" size="lg" block="true" href="/profile">
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

export default EditProfile;
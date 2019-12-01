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
import {Link} from "react-router-dom";


class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){
        // console.log(Firebase.database().ref('events').orderByKey().limitToLast(100));
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
        // console.log(Firebase.database().ref('events'));
    }

    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = Firebase.database().ref('events' );
        const item = {
            eventName: this.state.eventName,
        };
        itemsRef.push(item);
        this.setState({
            eventName: ''
        });
        this.props.history.push("/event")
    }

    render() {

        return (
            <React.Fragment>
                <Container fluid="true">
                    <Row className="titlePadding">
                        <Button style={{ paddingTop: '10px' }} variant="outline-primary" type="button" href="/home">
                            <Octicon icon={ArrowLeft} size='medium' ariaLabel='arrow' />
                        </Button>

                        <div className="title">
                            <h1>Create Event</h1>
                        </div>
                    </Row>
                </Container>

                <div className="divider" />

                {/*<Form onSubmit={this.handleSubmit}>*/}
                <Form>
                    <Form.Group as={Col} controlId="formBasicName">
                        <Form.Label>Event Name</Form.Label>
                        <Form.Control name="eventName" type="text" onChange={this.handleChange} value={this.state.eventName}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formBasicLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="location" />
                    </Form.Group>

                    <Form.Row className="sidePadding">
                        <Form.Group as={Col} controlId="formBasicDate">
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>

                        <div className="divider" />

                        <Form.Group as={Col} controlId="formBasicTime">
                            <Form.Label>Start Time</Form.Label>
                            <Form.Control type="time" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className="sidePadding">
                        <Form.Group as={Col} controlId="formBasicDate">
                            <Form.Label>End Date</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>

                        <div className="divider" />

                        <Form.Group as={Col} controlId="formBasicTime">
                            <Form.Label>End Time</Form.Label>
                            <Form.Control type="time" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group as={Col} controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="description" />
                    </Form.Group>

                    <Form.Row className="sidePadding">
                        <Button variant="primary" type="submit" size="lg" block="true" onClick={this.handleSubmit}>
                            Create Event
                        </Button>
                    </Form.Row>

                </Form>
            </React.Fragment>
        );
    }
}

export default CreateEvent;
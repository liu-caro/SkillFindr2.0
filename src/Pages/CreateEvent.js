import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/SignUp.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Octicon, { ArrowLeft } from '@primer/octicons-react'
import firebase from '../firebase';
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
        // console.log(firebase.database().ref('events').orderByKey().limitToLast(100));
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
        // console.log(firebase.database().ref('events'));
    }

    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref('events' );
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
                    <Row>
                        <Button variant="primary" className="btn btn-primary" href="/home">
                            <Octicon icon={ArrowLeft} size='small' ariaLabel='arrow' />
                        </Button>
                        <div className="title">
                            <h1>Create Event</h1>
                        </div>
                    </Row>
                </Container>

                {/*<Form onSubmit={this.handleSubmit}>*/}
                <Form>
                    <Form.Row className="justify-content-center">
                        <Form.Group controlId="formBasicName">
                            <Form.Label column="false">Name</Form.Label>
                            <Form.Control name="eventName" type="text" onChange={this.handleChange} value={this.state.eventName}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className="justify-content-center">

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label column="true">Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                    </Form.Row>



                    <Form.Row className="justify-content-center">
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label column="true">Confirm Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className="justify-content-center">
                        <Button className="align-content-center" variant="primary" type="submit" onClick={this.handleSubmit}>
                            Create Event
                        </Button>
                    </Form.Row>






                </Form>
            </React.Fragment>
        );
    }
}

export default CreateEvent;
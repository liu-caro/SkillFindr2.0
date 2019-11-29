import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/SignUp.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Octicon, { ArrowLeft } from '@primer/octicons-react'
import firebase from '../firebase';
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";


class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: ''
        }
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
        const itemsRef = firebase.database().ref('items');
        const item = {
            eventName: this.state.eventName,
        };
        itemsRef.push(item);
        this.setState({
            eventName: ''
        });
    }

    render() {
        
        return (
            <React.Fragment>
                <div align="center" class="title-padding">
                    <h2>SkillFindr</h2>
                </div>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Row className="justify-content-center">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label column="false">Email address</Form.Label>
                            <Form.Control type="email" onChange={this.handleChange} value={this.state.username}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className="justify-content-center">
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label column="true">Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                    </Form.Row>

                    <div align="center">
                        <p>
                            New? Sign up <Link to="/signup"> here</Link>!
                        </p>
                    </div>

                    <Form.Row className="justify-content-center">
                        <Button class="align-content-center" variant="primary" type="submit" href="/home">
                            Log In
                        </Button>

                    </Form.Row>
                </Form>
            </React.Fragment>
        );
    }
}

export default CreateEvent;
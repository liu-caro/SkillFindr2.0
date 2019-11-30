import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/SignUp.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Octicon, { ArrowLeft } from '@primer/octicons-react'


class SignUp extends Component {
    render() {

        return (
            <React.Fragment>

                <Container fluid="true">
                    <Row>
                        <Button variant="primary" className="btn btn-primary" href="/login">
                            <Octicon icon={ArrowLeft} size='small' ariaLabel='arrow' />
                        </Button>
                        <div className="title">
                            <h1>Sign Up</h1>
                        </div>
                    </Row>
                </Container>

                <Form>
                    <Form.Row className="justify-content-center">
                        <Form.Group controlId="formBasicName">
                            <Form.Label column="false">Name</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className="justify-content-center">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label column="false">Email address</Form.Label>
                            <Form.Control type="email" />
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

                        <Button href="/login">
                            Cancel
                        </Button>

                        <div className="divider" />

                        <Button href="/create-profile">
                            Next
                        </Button>

                    </Form.Row>
                </Form>
            </React.Fragment>
        );
    }
}

export default SignUp;
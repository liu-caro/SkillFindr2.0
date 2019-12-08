import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/SignUp.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Octicon, { ArrowLeft } from '@primer/octicons-react'



class CreateProfile extends Component {
    render() {

        return (

            <React.Fragment>
                <Container fluid="true">
                    <Row className="titlePadding">
                        <Button style={{ paddingTop: '10px' }} variant="outline-primary" type="button" href="/signup">
                            <Octicon icon={ArrowLeft} size='medium' ariaLabel='arrow' />
                        </Button>
                        <div className="title">
                            <h1>Create Profile</h1>
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
                        <Form.Group controlId="formBasicBio">
                            <Form.Label column="false">Bio</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className="justify-content-center">
                        <Form.Group controlId="formBasicSkills">
                            <Form.Label column="true">Skills</Form.Label>
                            <Form.Control type="text" as="textarea/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className="justify-content-center">

                        <Button href="/login">
                            Cancel
                        </Button>

                        <div className="divider" />

                        <Button href="/profile">
                            Next
                        </Button>

                    </Form.Row>
                </Form>

            </React.Fragment>
        );
    }
}

export default CreateProfile;
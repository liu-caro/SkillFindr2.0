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
import FileUploader from "react-firebase-file-uploader";


class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: '',
            location: '',
            startDate: '',
            startTime: '',
            endDate: '',
            endTime: '',
            descrip: '',
            isUploading: false,
            progress: 0,
            imageURL: ''
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

    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error(error);
    };
    handleUploadSuccess = filename => {
        this.setState({ avatar: filename, progress: 100, isUploading: false });
        Firebase
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => {
                this.setState({ imageURL: url });
                console.log(this.state.imageURL);
            });
    };

    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = Firebase.database().ref('events' );
        const item = {
            eventName: this.state.eventName,
            location: this.state.location,
            startDate: this.state.startDate,
            startTime: this.state.startTime,
            endDate: this.state.endDate,
            endTime: this.state.endTime,
            descrip: this.state.descrip,
            imageURL: this.state.imageURL,
            attendees: 0
        };
        itemsRef.push(item);
        this.setState({
            eventName: '',
            location: '',
            startDate: '',
            startTime: '',
            endDate: '',
            endTime: '',
            descrip: ''

        });
        this.props.history.push("/home");
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

                    <Form.Group as={Col} controlId="formBasicImage">
                        <FileUploader
                            accept="image/*"
                            name="avatar"
                            randomizeFilename
                            storageRef={Firebase.storage().ref("images")}
                            onUploadStart={this.handleUploadStart}
                            onUploadError={this.handleUploadError}
                            onUploadSuccess={this.handleUploadSuccess}
                            onProgress={this.handleProgress}
                        />
                        {this.state.imageURL.length ? <img
                                src={this.state.imageURL}
                                alt="Uploaded Images"
                                height="300"
                                width="400"
                            /> : <div/>}
                        {console.log(this.state.imageURL)}
                    </Form.Group>



                    <Form.Group as={Col} controlId="formBasicLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control name="location" type="location" onChange={this.handleChange} value={this.state.location}/>
                    </Form.Group>

                    <Form.Row className="sidePadding">
                        <Form.Group as={Col} controlId="formBasicDate">
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control name="startDate" type="date" onChange={this.handleChange} value={this.state.startDate}/>
                        </Form.Group>

                        <div className="divider" />

                        <Form.Group as={Col} controlId="formBasicTime">
                            <Form.Label>Start Time</Form.Label>
                            <Form.Control name="startTime" type="time" onChange={this.handleChange} value={this.state.startTime}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className="sidePadding">
                        <Form.Group as={Col} controlId="formBasicDate">
                            <Form.Label>End Date</Form.Label>
                            <Form.Control name="endDate" type="date" onChange={this.handleChange} value={this.state.endDate}/>
                        </Form.Group>

                        <div className="divider" />

                        <Form.Group as={Col} controlId="formBasicTime">
                            <Form.Label>End Time</Form.Label>
                            <Form.Control name="endTime" type="time" onChange={this.handleChange} value={this.state.endTime}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group as={Col} controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control name="descrip" type="description" onChange={this.handleChange} value={this.state.descrip}/>
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
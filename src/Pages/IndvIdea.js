import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import '../Stylesheets/IndvIdea.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import HackBeanpot from '../Images/hackBeanPot.png';
import Octicon, { ArrowLeft } from '@primer/octicons-react'



class IndvIdea extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {isRegistered: false};
    // }

    render() {

        const data = this.props.location.state;

        return (

            <React.Fragment>
                
                <Row>
                    <Col >
                        <button class="btn btn-primary" routerLink="/home">
                            <Octicon icon={ArrowLeft} size='small' ariaLabel='arrow' />
                        </button>
                    </Col>
                    <Col >
                        <Tabs defaultActiveKey="ideas">
                            <Tab eventKey="event" title="Event">
                            </Tab>
                            <Tab eventKey="ideas" title="Ideas">
                            </Tab>
                            <Tab eventKey="attendees" title="Attendees">
                            </Tab>
                        </Tabs>
                    </Col>
                    <Col/>
                </Row>

                <Row>
                    <h1>Salem</h1>
                </Row>

                <Row>
                    <Col align="center">
              
                        <p>
                          A improv card game based around witches in Salem.dsfhjsdhfjhsdjfhjsdhfksd f skjfd kshdfkjshd fkhdsfkjh dsfkjh ksdjfh
                        </p>
                    </Col>
                 </Row>

                 <Row>
                    <h1>Skills requested:</h1>
                </Row>


                 <Row>
                     <Col xs = "6">
                         <div class = "skill-list">
                            Back-End
                         </div>
                     </Col>
                     <Col xs = "6">
                         <div class = "skill-list">
                            Designer
                         </div>
                     </Col>

                     <Col xs = "6">
                         <div class = "skill-list">
                            2D Art
                         </div>
                     </Col>
                     <Col xs = "6">
                         <div class = "skill-list">
                            Tech Art
                         </div>
                     </Col>


                 </Row>

                 <Button class="justify-content-center" variant="primary" href="/event">
                                Join Team
                            </Button>






            </React.Fragment>
        );
    }
}

export default IndvIdea;
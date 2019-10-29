import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Contact extends Component {
    render() {
        return (
            <div className='Contact'>
                <h1>Contact Me!</h1>
                <Form>
                    <FormGroup row>
                        <Label for="yourName" sm={2}>Name</Label>
                        <Col sm={10}>
                            <Input type="text" name="text" id="name" placeholder="Enter your name here" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="yourEmail" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="email" name="email" id="email" placeholder="Enter your email here" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="message" sm={2} >Your Message</Label>
                        <Col sm={10}>
                            <Input type="textarea" name="text" id="message" placeholder="Write your message here" />
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button>Send Message</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            message: '',
            valid: false
        }
    }

    submitName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    submitEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    };

    submitMsg = (e) => {
        this.setState({
            message: e.target.value
        })
    };

    formVal = (e) => {
        e.preventDefault();
        if (this.state.name === '' || this.state.email === '' || this.state.message === '') {
            alert('Please complete all fields')
            return false;
        } if (this.state.message.length < 10 || this.state.message.length > 160) {
            alert('Your message must be between 10 and 160 characters long!')
            return false;
        }
        else {
            alert('Thanks for completing the form!')
            this.setState({
                valid: true
            })
            return false
        }
    }



    render() {
        if (this.state.valid === true) {
            return (
                <div className= 'App'>
                    <h1>Thanks for your message!!</h1>
                </div>
            )
        }
        else {
            return (
                <div className='Contact'>
                    <h1>Contact Me!</h1>
                    <Form onSubmit={this.formVal}>
                        <FormGroup row>
                            <Label for="yourName" sm={2}>Name</Label>
                            <Col sm={10}>
                                <Input onChange={this.submitName} value={this.state.name}
                                    type="text" name="text" id="name" placeholder="Enter your name here" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="yourEmail" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input onChange={this.submitEmail} value={this.state.email}
                                    type="email" name="email" id="email" placeholder="Enter your email here" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="message" sm={2} >Your Message</Label>
                            <Col sm={10}>
                                <Input onChange={this.submitMsg} value={this.state.message}
                                    type="textarea" name="text" id="message" placeholder="Write your message here" />
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
}
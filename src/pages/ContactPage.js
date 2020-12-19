import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

import Hero from '../components/Hero';
import Content from '../components/Content';

class ContactPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            messageSent: null
        }
    }


    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled: true
        })

        axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                if(res.data.succes) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        messageSent: false
                    });
                }
            })
            .catch(err => {
                this.setState({
                    disables: false,
                    messageSent: false
                })
            })
    }


    render() {

        return (
            <div>
                <Hero title={this.props.title} />
                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor='full-name'>Full Name:</Form.Label>
                            <Form.Control id='full-name' name='name' type='text' value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='email'>Email:</Form.Label>
                            <Form.Control id='email' name='email' type='email' value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='message'>Message:</Form.Label>
                            <Form.Control id='message' name='message' as='textarea' rows={5} value={this.state.message} onChange={this.handleChange} />
                        </Form.Group>
                        <Button className='d-inline-block' variant='primary' type='submit' disabled={this.state.disabled}>
                            Send
                        </Button>

                        {this.state.emailSent === true && <p className='d-inline success-msg'>Email sent!</p>}
                        {this.state.emailSent === false && <p className='d-inline err-msg'>Email was not sent...</p>}
                    </Form>
                </Content>

            </div>
        )

    }

}

export default ContactPage;
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Hero from '../components/Hero';

class HomePage extends Component {

    render() {

        return (

                <div>
                    <Hero title={this.props.title} subtitle={this.props.subtitle} phrase={this.props.phrase} />
                    <hr />
                    <h4 className='home-section-title'>Projects</h4>
                    <p className='carousel-instructions'>select an image for more information</p>
                    <div className='home-preview projects-preview'> 
                        <Container fluid={true} className='px-5'>
                            <Row className='justify-content-around ml-5 mr-5'>
                                {this.props.makeHomeCards(this.props.homeData.projectsData)}
                            </Row>
                        </Container>
                        <a className='more-projects-link' href='/projects'>(see more)</a>
                    </div>
                    <hr />
                    <h4 className='home-section-title'>About me</h4>
                    <div className='home-preview about-me-preview'>
                        <p>
                            I am a frontend web developer proficient in jQuery and React. I have a year of tech experience, within which I 
                            have developed my coding and problem-solving skills. I am constantly growing and pushing myself to become a 
                            stronger developer, but I am also interested in becoming fluent in as many languages as possible.
                        </p>
                        <a className='more-about-link' href='/about'>(read more)</a>
                    </div>
                </div>

        )
    }
}

export default HomePage;
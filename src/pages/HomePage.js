import React, { Component } from 'react';
import Content from '../components/Content';

import Hero from '../components/Hero';
import './HomePage.css';

class HomePage extends Component {

    render() {

        return (
                <div className='home-page'>
                    <Hero title={this.props.title} subtitle={this.props.subtitle} phrase={this.props.phrase} />
                    <Content>
                        <h4 className='home-section-title home-projects-title'>Projects</h4>
                        <p className='carousel-instructions'>select an image for more information</p>
                        <div className='home-preview projects-preview'> 
                            <div className='home-cards'>
                            {this.props.makeHomeCards(this.props.homeData.projectsData)}
                            </div>
                            <a className='more-link' href='/projects'>(see more)</a>
                        </div>
                        <hr />
                        <h4 className='home-section-title'>About me</h4>
                        <div className='home-preview about-me-preview'>
                            <p>
                                I am a frontend web developer proficient in jQuery and React. I have a year of tech experience, within which I 
                                have developed my coding and problem-solving skills. I am constantly growing and pushing myself to become a 
                                stronger developer, but I am also interested in becoming fluent in as many languages as possible.
                            </p>
                            <a className='more-link' href='/about'>(read more)</a>
                        </div>
                    </Content>
                </div>
        )
    }
}

export default HomePage;
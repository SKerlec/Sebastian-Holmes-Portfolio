import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
// import ContactPage from './pages/ContactPage';
import Card from './components/Card';
import './App.css';

import gameFinderImg from './assets/gameFinderImg.png';
import louisianaQuizAppImg from './assets/louisianaQuizAppImg.jpg';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Projects', path: '/projects' },
        // { title: 'Contact', path: '/contact' }
      ],
      title: 'Sebastian Holmes',
      home: {
        title: 'Sebastian Holmes',
        subtitle: 'Front-End Developer',
        phrase: 'Welcome to my world...'
      },
      about: {
        title: 'About Me'
      },
      projects: {
        title: 'My Projects'
      },
      // contact: {
      //   title: 'Get In Touch!'
      // },
      projectsData: [
        { 
          id: 0,
          title: 'Game Finder',
          description: 'Retrieve detailed information on your favorite video games.',
          imgSrc: gameFinderImg,
          liveLink: 'https://skerlec.github.io/game-finder/',
          repoLink: 'https://github.com/SKerlec/game-finder.git',
          selected: false
        },
        { 
          id: 1,
          title: 'Louisiana Quiz',
          description: 'Test your knowledge of Louisiana culture, one question at a time.',
          imgSrc: louisianaQuizAppImg,
          liveLink: 'https://skerlec.github.io/Quiz-App-Project/',
          repoLink: 'https://github.com/SKerlec/Quiz-App-Project.git',
          selected: false
        }
      ]
    }
  }


  handleCardClick = (id) => {

    let projectsData = [...this.state.projectsData];

    projectsData[id].selected = projectsData[id].selected ? false : true;

    projectsData.forEach(item => {
        if(item.id !== id) {
            item.selected = false
        }
    });

    this.setState({
        projectsData
    });

}


  makeHomeItems = (projects) => {  

    let amount = 3;

    let carouselCards = projects.filter(item => item.id < amount);

    return carouselCards.map(item => {
        return <Card item={item} key={item.id} click={(e => this.handleCardClick(item.id, e))} />
    })
    
  }

  makeItems = (projects) => {
    return projects.map(item => {
      return <Card item={item} key={item.id} click={(e => this.handleCardClick(item.id, e))} />
    })
  }



  render() {

    return (
      <Router>
        <div className='app-container'>

          <Navbar className='border-bottom border-secondary' bg='transparent' expand='lg'>
            <Navbar.Brand>Sebastian Holmes</Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/projects'>Projects</Link>
                {/* <Link className='nav-link' to='/contact'>Contact</Link> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path='/' exact render={() => <HomePage homeData={this.state} makeHomeCards={this.makeHomeItems} title={this.state.home.title} subtitle={this.state.home.subtitle} phrase={this.state.home.phrase} headerLinks={this.state.headerLinks} />} />
          <Route path='/about' render={() => <AboutPage title={this.state.about.title} />} />
          <Route path='/projects' render={() => <ProjectsPage projectsData={this.state.projectsData} makeCards={this.makeItems} title={this.state.projects.title} />} />
          {/* <Route path='/contact' render={() => <ContactPage title={this.state.contact.title} />} /> */}

          <Footer />

        </div>
      </Router>


    )

  }

}

export default App;
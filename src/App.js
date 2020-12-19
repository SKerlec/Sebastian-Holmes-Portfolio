import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Card from './components/Card';

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
        { title: 'Contact', path: '/contact' }
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
      contact: {
        title: 'Get In Touch!'
      },
      projectsData: [
        { 
          id: 0,
          title: 'Game Finder',
          description: 'Retrieve detailed information on your favorite video games.',
          imgSrc: gameFinderImg,
          liveLink: '',
          repoLink: '',
          selected: false
        },
        { 
          id: 1,
          title: 'Louisiana Quiz',
          description: 'Test your knowledge of Louisiana culture, one question at a time.',
          imgSrc: louisianaQuizAppImg,
          liveLink: '',
          repoLink: '',
          selected: false
        },
        { 
          id: 2,
          title: 'Game Finder',
          description: 'Retrieve detailed information on your favorite video games.',
          imgSrc: gameFinderImg,
          liveLink: '',
          repoLink: '',
          selected: false
        },
        { 
          id: 3,
          title: 'Louisiana Quiz',
          description: 'Test your knowledge of Louisiana culture, one question at a time.',
          imgSrc: louisianaQuizAppImg,
          liveLink: '',
          repoLink: '',
          selected: false
        },
        { 
          id: 4,
          title: 'Game Finder',
          description: 'Retrieve detailed information on your favorite video games.',
          imgSrc: gameFinderImg,
          liveLink: '',
          repoLink: '',
          selected: false
        },
        { 
          id: 5,
          title: 'Louisiana Quiz',
          description: 'Test your knowledge of Louisiana culture, one question at a time.',
          imgSrc: louisianaQuizAppImg,
          liveLink: '',
          repoLink: '',
          selected: false
        },
      ]
    }
  }


  handleCardClick = (id) => {

    let projects = [...this.state.projectsData];

    projects[id].selected = projects[id].selected ? false : true;

    projects.forEach(item => {
        if(item.id !== id) {
            item.selected = false
        }
    });

    this.setState({
        projects
    });

}


makeHomeItems = (projects) => {  

    let amount = 3;

    console.log(amount);
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
        <Container className='p-0' fluid={true}>

          <Navbar className='border-bottom border-secondary' bg='transparent' expand='lg'>
            <Navbar.Brand>Sebastian Holmes</Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/projects'>Projects</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path='/' exact render={() => <HomePage homeData={this.state} makeHomeCards={this.makeHomeItems} title={this.state.home.title} subtitle={this.state.home.subtitle} phrase={this.state.home.phrase} headerLinks={this.state.headerLinks} />} />
          <Route path='/about' render={() => <AboutPage title={this.state.about.title} />} />
          <Route path='/projects' render={() => <ProjectsPage projectsData={this.state.projectsData} makeCards={this.makeItems} title={this.state.projects.title} />} />
          <Route path='/contact' render={() => <ContactPage title={this.state.contact.title} />} />

          <Footer />

        </Container>
      </Router>


    )

  }

}

export default App;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import markdown from './markdown.png';
import randomQuote from './randomQuote.png';
import robofriends from './robofriends.png';
import { BsGithub } from 'react-icons/bs';

function App() {
  return (
    <div className="App">
      <Navbar className="navbar" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Jancy Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/jancy-baez" target="_blank">Linked In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <div className='first-box' >
          <div id='first-post' className="post1">
            Random Quotes project was build using React components, CSS and Api's in order to retrive the information that is being displayed.
          </div>
          <img src={randomQuote} alt='random quote screen-shot' className="first-project" />
          <div className="project-link">
            <a href='https://itsjotab.github.io/random-quote-machine-fcc/' className="icon" >
              <BsGithub />
            </a>
          </div>
        </div>
        <div id='second-project' className='second-box' >
          <div className="post2">MarkDown Project was build using React components and CSS. </div>
          <img src={markdown} alt='markdown screen-shot' className="second-project" />
          <div className="project-link">
            <a href='https://itsjotab.github.io/markdown-text-fcc/' >
              <BsGithub />
            </a>
          </div>
        </div>
        <div id='third-project' className='third-box' >
          <div className="post3"> Robofriends project was build using React Components, CSS, multiple librarys using NPM, and Api's.
          </div>
          <img src={robofriends} alt="robofriends screen-shot" className="third-project" />
          <div className="project-link">
            <a href="https://itsjotab.github.io/robofriends/" >
            <BsGithub />
            </a>
          </div>
        </div>
      </div>
      <footer className="footer" >Made by Jancy</footer>
    </div>
  );
}

export default App;

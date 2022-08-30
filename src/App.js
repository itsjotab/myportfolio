import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import robofriends from './images/robofriends.png';
import firebase from './images/firebase.png'


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



      <div id='first-project' className='first-box' >
        <div className="post1"> Sign-in form using firebase to store user Information, you can create a login or log back in if you have already subscribed.
        </div>
        <a href='' >
          <img src={firebase} alt="Sign-up form" className="second-project" />
        </a>
      </div>



      <div id='second-project' className='second-box' >
        <div className="post2"> Robofriends project was build using React Components, CSS, multiple librarys using NPM, and Api's.
        </div>
        <a href='https://stock-alerts-ad47f.web.app/' >
          <img alt="Stocks-portfolio" className="second-project" />
        </a>
      </div>
      
      
      <hr />
      <div id='third-project' className='third-box' >
        <div className="post3"> Robofriends project uses an API for both users and Robo cards. The search bar allows you to seach for specific users.
        </div>
        <a href="https://itsjotab.github.io/robofriends/" >
          <img src={robofriends} alt="robofriends screen-shot" className="third-project" />
        </a>
      </div>
      <div>
        <hr />
      </div>
      <footer className="footer" >Made by Jancy</footer>
    </div>
  );
}

export default App;

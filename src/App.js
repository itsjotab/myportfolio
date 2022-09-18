import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import robofriends from './images/robofriends.png';
import firebase from './images/firebase.png';
import stocks from './images/stocks.png';
import markdown from './images/markdown.png';
import profile from './images/profilepic.png'


function App() {
  return (
    <div className="App">
      <Navbar className="navbar" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Jancy Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="https://www.linkedin.com/in/jancy-baez" target="_blank">Linkedin</Nav.Link>
              <Nav.Link href="https://www.github.com/itsjotab" target='_blank'>Github</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id='about-me' className='picture' >
        <div className="post">
          <b className='aboutme'>About Me</b>
          <p></p>
          </div>
        <a href='' target='' >
          <img
            src={profile}
            alt=""
            className="img-pic"
             />
        </a>
      </div>
      <hr />

      <div id='first-project' className='box' >
        <div className="post"> Stocks was build using Firebase Hosting, Firebase Functions, Github Actions, and github stories. Uses a bank-end to fetch the stocks data. Material UI was also used for the table displaying the stocks.
        </div>
        <a href='https://stock-alerts-ad47f.web.app/' target='_blank' >
          <img src={stocks} alt="Screen shot of a table showing stocks by ticker" className="first-project project" />
        </a>
      </div>
      <hr />

      <div id='second-project' className='box' >
        <div className="post"> Robofriends project uses an API for both users and Robo cards. The search bar allows you to seach for specific users.
        </div>
        <a href="https://itsjotab.github.io/robofriends/" target='_blank' >
          <img src={robofriends} alt="Screen shot of the robofriends emailing list with robot faces as icons" className="second-project project" />
        </a>
      </div>
      <div>

        <hr />

        <div id='third-project' className='box' >
          <div className="post"> Sign-in form using firebase to store user Information, you can create a login or log back in if you have already subscribed.
          </div>
          <a href='https://report-card-for-people.web.app/' target='_blank' >
            <img src={firebase} alt="Signup for screen shot where you enter your email and password" className="third-project project" />
          </a>
        </div>
        <hr />

        <div id='fourth-project' className='box' >
          <div className="post"> This is a React-Markdown project, that converts Markdown text into corresponding HTML code.
          </div>
          <a href='https://itsjotab.github.io/markdown-text-fcc/' target='_blank'>
            <img src={markdown} alt="Screen shot of the markdown page showing text that was enter and turned into Hypertext markup language" className="fourth-project project" />
          </a>
        </div>
        <hr />
      </div>
      <footer className="footer" >Made by Jancy</footer>
    </div>
  );
}

export default App;

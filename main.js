import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {Navbar,Nav, NavItem, DropdownButton, MenuItem} from 'react-bootstrap';

//import App from './App.jsx';
class App extends React.Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}

export default App;

const navbarInstance = (
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} to="home">Home</NavItem>
        <NavItem eventKey={2} to="about">About</NavItem>
        <NavItem eventKey={3} to="contact">Contact</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
ReactDOM.render(navbarInstance, document.getElementById('theNav'));

class Home extends React.Component {
	render() {
		return(
			<div>
				<Banner/>
			</div>
		);
	}
}



class About extends React.Component {
	render() {
		return(
			<div>
				<h1>About</h1>
			</div>
		);
	}
}


class Contact extends React.Component {
	render() {
		return(
			<div>
				<h1>Contact</h1>
			</div>
		)
	}
}

class Banner extends React.Component {
	render() {
		return(
			<div className="col-md-12 col-sm-12 banner">
				<h1>Home</h1>
			</div>
		)
	}
}

ReactDOM.render((
	<Router history = {browserHistory}>
		<Route path = '/' component = {App}>
			<IndexRoute component = {Home} />
			<Route path = "home" component = {Home} />
			<Route path = "about" component = {About} />
			<Route path = "contact" component = {Contact} />
		</Route>
	</Router>
), document.getElementById('app'));

//ReactDOM.render(<App/>, document.getElementById('app'));
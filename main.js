import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Router, Route, RouteHandler, Link, browserHistory, IndexRoute} from 'react-router';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {Navbar,Nav, NavItem, DropdownButton, MenuItem} from 'react-bootstrap';
import {LinkContainer,IndexLinkContainer} from 'react-router-bootstrap';

//import App from './App.jsx';
class App extends React.Component {
	render() {
		return (
			<div>
			  <Navbar inverse>
			    <Navbar.Header>
			      <Navbar.Brand>
			        <a href="#">React-Bootstrap</a>
			      </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse>
			      <Nav>
			      	<IndexLinkContainer to="/">
			        	<NavItem eventKey={1}>Home</NavItem>
			        </IndexLinkContainer>
			        <LinkContainer to="about">
			        	<NavItem eventKey={2}>About</NavItem>
			        </LinkContainer>
			        <LinkContainer to="contact">
			        	<NavItem eventKey={3}>Contact</NavItem>
			        </LinkContainer>
			      </Nav>
			    </Navbar.Collapse>
			  </Navbar>
			  	<div>
					{this.props.children}
			    </div>
			</div>
		);
	}
}

export default App;


class Home extends React.Component {
	render() {
		return(
			<div>
				<Banner name="Home" />
			</div>
		);
	}
}



class About extends React.Component {
	render() {
		return(
			<div>
				<Banner name="About" />
			</div>
		);
	}
}


class Contact extends React.Component {
	render() {
		return(
			<div>
				<Banner name="Contact" />
			</div>
		);
	}
}

class Banner extends React.Component {
	render() {
		return(
			<div className="col-md-12 col-sm-12 banner">
				<h1>{this.props.name}</h1>
			</div>
		);
	}
}

ReactDOM.render((
	<Router history = {browserHistory}>
		<Route path = '/' component = {App}>
			<IndexRoute component = {Home} />
			<Route name="home" path = "home" component = {Home} />
			<Route name="about" path = "about" component = {About} />
			<Route name="contact" path = "contact" component = {Contact} />
		</Route>
	</Router>
), document.getElementById('app'));

//ReactDOM.render(<App/>, document.getElementById('app'));
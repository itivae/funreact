import React from 'react';
import ReactDOM from 'react-dom';
import {ReactBootstrap, Grid, Row, Col} from 'react-bootstrap';
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
				<Content />
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

var dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];

class Content extends React.Component {
	render() {
		return(
			<div className="container content">
				<Grid>
				    <Row className="show-grid">
				      <Col sm={6} md={3}>{dummySentences.slice(0, 6).join(' ')}</Col>
				      <Col sm={6} md={3}>{dummySentences.slice(0, 4).join(' ')}</Col>
				      <Col sm={6} md={3}>{dummySentences.slice(0, 6).join(' ')}</Col>
				      <Col sm={6} md={3}>{dummySentences.slice(0, 2).join(' ')}</Col>
				    </Row>
				</Grid>
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
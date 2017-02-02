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
				<Content columns={3} />
				<Footer />
			</div>
		);
	}
}



class About extends React.Component {
	render() {
		return(
			<div>
				<Banner name="About" />
				<Content columns={2} sidebar="right" />
				<Footer />
			</div>
		);
	}
}


class Contact extends React.Component {
	render() {
		return(
			<div>
				<Banner name="Contact" />
				<Content columns={3} />
				<Footer />
			</div>
		);
	}
}

class Banner extends React.Component {
	render() {
		return(
			<div className="col-md-12 col-sm-12 banner margin-bottom">
				<h1>{this.props.name}</h1>
			</div>
		);
	}
}
class Sidebar extends React.Component {
	render() {
		return(
			<div className="col-md-4 col-sm-4">
				<h3>Sidebar Heading</h3>
				<form action="#" method="post">
					<label for="first">First name:
				  	<input type="text" name="first" value="" /></label>
				  	<label for="last">Last name:
				  	<input type="text" name="last" value="" /></label><br/><br/>
				  	<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

var dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];
class Content extends React.Component {
	render() {
		var columns = this.props.columns;
		var sidebar = this.props.sidebar;
		var grid;

		switch(columns) {
			case 1:
				grid = 12;
				break;
			case 2:
				grid = 6;
				break;
			case 3: 
				grid = 4;
				break;
			case 4:
				grid = 3;
				break;
			case 6:
				grid = 2;
				break;
			default:
				grid = 12;
				break;
		}
		 
	
		var content = [];
		var sliver = [{"start": 0, "stop": 6}, {"start": 0, "stop": 4}, {"start": 4, "stop": 6}, {"start": 2, "stop": 6}]
		
				for(var i=0; i < columns; i++) {
					var id = i + 1;
					if(sidebar === "right" && columns === 2 && i == columns - 1) {
						content.push(<Col key={id}><Sidebar /></Col>);
						continue;
						
					} else if(sidebar === "right" && columns === 2 && i == columns - 2) {
						grid = grid + 2;
						content.push(<Col key={id} sm={grid} md={grid}>{dummySentences.slice(sliver[i]["start"], sliver[i]["stop"]).join(' ')}</Col>);
						
					} else if(sidebar === "left" && columns === 2 && i == columns - 1) {
						grid = grid + 2;
						content.push(<Col key={id} sm={grid} md={grid}>{dummySentences.slice(sliver[i]["start"], sliver[i]["stop"]).join(' ')}</Col>);
						
					} else if(sidebar === "left" && columns === 2 && i == columns - 2) {
						content.push(<Col key={id}><Sidebar /></Col>);
						continue;
					} else if(sidebar === "" || sidebar === undefined || sidebar === null) {

						content.push(<Col key={id} sm={grid} md={grid}>{dummySentences.slice(sliver[i]["start"], sliver[i]["stop"]).join(' ')}</Col>);
					}
					content.push(<Col key={id} sm={grid} md={grid}>{dummySentences.slice(sliver[i]["start"], sliver[i]["stop"]).join(' ')}</Col>);
				}
		return(
			<div className="container content">
				<Grid>
				    <Row className="show-grid">
				    	{content}
				    </Row>
				</Grid>
			</div>
		);
	}
}
class Footer extends React.Component {
	render() {
		return(
			<div className="col-md-12 col-sm-12 footer">
				&copy;&nbsp;The Company Store
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
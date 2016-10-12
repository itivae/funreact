import React from 'react';
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: 
			[
				{
					"id":1,
					"name": "John",
					"age": "40"
				},
				{
					"id":2,
					"name": "Bob",
					"age": "37"					
				},
				{
					"id":3,
					"name": "Ted",
					"age": "31"					
				},
				{
					"id":4,
					"name": "Don",
					"age": "75"					
				},
				{
					"id":5,
					"name": "Bill",
					"age": "65"					
				},
			]
		}
	}
	render() {
		return (
			<div>
				<Header />
				<Content />
				<table>
					<tbody>
						{this.state.data.map((person, i) => <TableRow key= {i} data = {person} />)}
					</tbody>
				</table>
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>Header</h1>
			</div>
		);
	}
}

class Content extends React.Component {
	render() {
		return (
			<div>
				<h2>Content</h2>
				<p>This is the Content.</p>
			</div>
		);
	}
}

class TableRow extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.data.id}</td>
				<td>{this.props.data.name}</td>
				<td>{this.props.data.age}</td>
			</tr>
		);
	}
}

export default App;
import React, { Component } from 'react';

import './Flex.css';

class Flex extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({value: event.target.value});
		document.getElementById('error').style.display = "block";
		const regex = /^[-.\w]+@(?:[a-z\d]{2,}\.)+[a-z]{2,6}$/g;
		const str = event.target.value;
		let m;

		while ((m = regex.exec(str)) !== null) {

		    if (m.index === regex.lastIndex) {
		        regex.lastIndex++;
		    }

		    m.forEach((match, groupIndex) => {
		        console.log(`Found match, group ${groupIndex}: ${match}`);
						document.getElementById('error').style.display = "none";
		    });
		}
	}
	render() {
		return (
			<div className="Flex">
				<h2 className="Flex__title">Flex</h2>
				<div className="row">
					<label htmlFor="fieldA"> Field A: </label>
					<input className="" id="fieldA" type="text" value={this.setState.value} onChange={this.handleChange} ref="text" />
					<div className="error" id="error">!!!</div>
				</div>
				<div className="row">
					<label htmlFor="fieldB"> Field B: </label>
					<input className="" type="text" ref="text" />
					<span>@example.com</span>
				</div>
			</div>
		);
	}
}

export default Flex;

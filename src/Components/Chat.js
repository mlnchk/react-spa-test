import React, { Component } from 'react';

import './Chat.css';

class Chat extends Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}
	state = {
		messages: [
			{text: 'Отправленное сообщение', type: 'sent', time: '00:00'},
			{text: 'Полученное сообщение', type: 'received', time: '00:00'}
		]
	}
	handleSubmit (e) {
		e.preventDefault();

		let time = new Date();
		time = time.getHours() + ':' + time.getMinutes();

		let messages = this.state.messages;
		let message = {text: this.refs.text.value.trim(), type: 'sent', time: time};
		let message_from = {text: "Абсолютно согласен.", type: 'recieved', time: time};
		messages.push(message);

		if (navigator.onLine) {
			messages.push(message_from);
			this.setState({messages: messages});
		} else {
			console.log('Нет сети');

			let timeFunc = (function () {
				if (navigator.onLine) {
					console.log('EST');
					messages.push(message_from);
					this.setState({messages: messages});
					clearInterval(interval);
				}
			}).bind(this);

			let interval = setInterval(timeFunc, 5000);
		}

		this.refs.text.value = '';

	}
	render() {
		console.log('items', this.props.items);
		return (
			<div className="Chat">
				<h2 className="Chat__title">Chat</h2>
				<ul className="Chat__messages">
					{this.state.messages.map((item, index) =>
						<li className={"message message_" + item.type} key={index}>
							<div className="message__date"> {item.time}</div>
							<div className="message__text">{item.text}</div>
						</li>
					)}
				</ul>
				<form className="row" onSubmit={this.handleSubmit}>
					<input className="Chat__input" type="text" ref="text" />
					<input className="Chat__submit" type="submit" />
				</form>
			</div>
		);
	}
}

export default Chat;

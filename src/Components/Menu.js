import React, { Component } from 'react';
import { Link } from 'react-router';

import './Menu.css';

class Menu extends Component {
  state = {
    menu: [
      {
        link: '/chat',
        label: 'Chat'
      },
      {
        link: '/flex',
        label: 'Flex'
      },
      {
        link: '/404',
        label: 'empty'
      },
      {
        link: '/404',
        label: 'empty'
      }
    ]
  }
	render() {
		return (
			<div className="Menu">
				<h2 className="Menu__title">Menu</h2>
        <ul className="Menu__list">
					{this.state.menu.map((item, index) =>
						<li className="Menu__item" key={index}><Link className="Menu__link" to={item.link}> {item.label} </Link></li>
					)}
        </ul>
			</div>
		);
	}
}

export default Menu;

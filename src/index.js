import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NotFound from './Components/NotFound';
import App from './Components/App';
import Menu from './Components/Menu';
import Chat from './Components/Chat';
import Flex from './Components/Flex';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Menu} />
      <Route path='chat' component={Chat} />
      <Route path='flex' component={Flex} />
    </Route>
    <Route path='*' component={NotFound} />
  </Router>,
  document.getElementById('root')
)

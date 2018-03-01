import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './index.css';
import Navbar from './Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Navbar />, document.getElementById('root')
);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import ReportViewerComponent from './Components/ReportViewerComponent';
// import TestComponent from './Components/test'



ReactDOM.render(<ReportViewerComponent/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

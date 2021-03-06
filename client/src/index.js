import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import BigCalendar from 'modules/react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

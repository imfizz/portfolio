import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { DataProvider } from './data/DataContext';

ReactDOM.render(
    <DataProvider>
        <App />
    </DataProvider>, 
document.getElementById('root'));
registerServiceWorker();

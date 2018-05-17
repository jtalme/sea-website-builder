import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.render(
  <BrowserRouter basename="/sea-website-builder">
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root'),
);
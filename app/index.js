import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';



import App from './components/app';
import Main from './components/home';
import About from './components/about';
import Services from './components/services';
import Brands from './components/brands';
import FAQ from './components/faq';
import Contact from './components/contact';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
  		<Route path="/" component={App}>
  			<IndexRoute component={Main} />
  			<Route path="/about" component={About} />
  			<Route path="/services" component={Services} />
  			<Route path="/brands" component={Brands} />
  			<Route path="/faq" component={FAQ} />
  			<Route path="/contact" component={Contact} />
  		</Route>
  	</Router>
  </Provider>
  , document.querySelector('.container-fluid'));
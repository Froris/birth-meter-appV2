import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Header from './components/Header';
import Main from './components/Main';
import configureStore from './store/configureStore';

const store = configureStore();
store.subscribe(() => console.log('Store subscribe:', store.getState()));

const App = () => (
	<Provider store={store}>
		<Header />
		<Main />
	</Provider>
)

ReactDOM.render(<App />, document.getElementById('root')); 

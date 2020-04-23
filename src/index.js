import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Main from './components/Main';

const App = () => (
	<React.Fragment>
		<Header />
		<Main />
	</React.Fragment>
)

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import './main.css';

import MonthsList from '../MonthsList';
import PeopleList from '../PeopleList';

const Main = () => (
	<main className='main'>
		<h2>Main Component</h2>
		<div className='main__container'>
			<MonthsList />
			<PeopleList />
		</div>
	</main>
)

export default Main;
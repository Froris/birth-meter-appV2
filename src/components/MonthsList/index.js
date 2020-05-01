import React from 'react';
import './monthsList.css';

const MonthsList = (props) => (
	<section className='main__months'>
		<ul className='months__list' onPointerOver={(e) => props.getMonth(e)}>
			<li id='0' className='list__item'>
				January
			</li>
			<li id='1' className='list__item'>
				February
			</li>
			<li id='2' className='list__item'>
				March
			</li>
			<li id='3' className='list__item'>
				April
			</li>
			<li id='4' className='list__item'>
				May
			</li>
			<li id='5' className='list__item'>
				June
			</li>
			<li id='6' className='list__item'>
				July
			</li>
			<li id='7' className='list__item'>
				August
			</li>
			<li id='8' className='list__item'>
				September
			</li>
			<li id='9' className='list__item'>
				October
			</li>
			<li id='10' className='list__item'>
				November
			</li>
			<li id='11' className='list__item'>
				December
			</li>
		</ul>
	</section>
)

export default MonthsList;
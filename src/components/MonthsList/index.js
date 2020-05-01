import React from 'react';
import './monthsList.css';

const MonthsList = (props) => (
	<section className='main__months'>
		<ul className='months__list' onPointerOver={(e) => props.getMonth(e)}>
			<li id='01' className='list__item'>
				January
			</li>
			<li id='02' className='list__item'>
				February
			</li>
			<li id='03' className='list__item'>
				March
			</li>
			<li id='04' className='list__item'>
				April
			</li>
			<li id='05' className='list__item'>
				May
			</li>
			<li id='06' className='list__item'>
				June
			</li>
			<li id='07' className='list__item'>
				July
			</li>
			<li id='08' className='list__item'>
				August
			</li>
			<li id='09' className='list__item'>
				September
			</li>
			<li id='10' className='list__item'>
				October
			</li>
			<li id='11' className='list__item'>
				November
			</li>
			<li id='12' className='list__item'>
				December
			</li>
		</ul>
	</section>
)

export default MonthsList;
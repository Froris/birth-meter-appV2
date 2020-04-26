import React, {Component} from 'react';
import { connect } from 'react-redux';
import './main.css';

import MonthsList from '../MonthsList';
import PeopleList from '../PeopleList';
import {startGetPeople} from '../../actions/getPeople';

class Main extends Component {

	componentDidMount(){
		this.props.startGetPeople();
	}

	render(){
		return (
			<main className='main'>
				<div className='main__container'>
					<MonthsList />
					<PeopleList />
				</div> 
			</main>
  	)
	} 
}

const mapDispatchToProps = (dispatch) => ({
	startGetPeople: () => dispatch(startGetPeople())
})

export default connect(undefined, mapDispatchToProps)(Main);
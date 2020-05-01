import React, {Component} from 'react';
import { connect } from 'react-redux';
import './main.css';

import MonthsList from '../MonthsList';
import PeopleListContainer from '../PeopleListContainer';
// import {startGetPeople} from '../../actions/getPeople';
import {startGetMonth} from '../../actions/getMonth';
import getFilteredList from '../../listFilter';

class Main extends Component {
	render(){
		return (
			<main className='main'>
				<div className='main__container'>
					<MonthsList getMonth={this.props.startGetMonth}/>
					<PeopleListContainer filteredList={this.props.filteredList}/>
				</div> 
			</main>
  	)
	} 
}

const mapStateToProps = (state) => ({
	filteredList: getFilteredList(state.peopleList, state.month)
})

const mapDispatchToProps = (dispatch) => ({
	// startGetPeople: () => dispatch(startGetPeople())
	startGetMonth: (e) => dispatch(startGetMonth(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
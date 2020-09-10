import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./main.css";

import MonthsList from "../MonthsList";
import PeopleListContainer from "../PeopleListContainer";
import startPeopleReciving from "../../actions/getPeople";
import { startGetMonth } from "../../actions/getMonth";
import getFilteredList from "../../listFilter";

const Main = (props) => {
  useEffect(() => {
    props.startPeopleReciving();
  }, []);

  return (
    <main className="main">
      <div className="main__container">
        <MonthsList getMonth={props.startGetMonth} filteredList={props.filteredList} />
        <PeopleListContainer filteredList={props.filteredList} />
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  filteredList: getFilteredList(state.peopleList, state.month),
});

const mapDispatchToProps = (dispatch) => ({
  startPeopleReciving: () => dispatch(startPeopleReciving()),
  startGetMonth: (e) => dispatch(startGetMonth(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

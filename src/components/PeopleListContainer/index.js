import React from "react";
import "./peopleContainer.css";

import PeopleList from "./peopleListComponent";

const PeopleListContainer = (props) => (
  <section className="main__people">
    {props.filteredList.length === 0 ? (
      <span className="people__span">Select month</span>
    ) : (
      <PeopleList filteredList={props.filteredList} />
    )}
  </section>
);

export default PeopleListContainer;

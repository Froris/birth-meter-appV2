import React from "react";
import "./peopleList.css";

const PeopleList = (props) => (
  <ul className="people__list">
    {props.filteredList.map((item, index) => (
      <li className="list__item" key={index}>
        <h3>{item.name}</h3>
        <p>{item.DOB}</p>
      </li>
    ))}
  </ul>
);

export default PeopleList;

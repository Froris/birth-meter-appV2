import React from "react";
import "./monthsList.css";
import classNames from "classnames";

const MonthsList = (props) => {
  const itemClass = classNames({
    list__item: true,
    low: props.filteredList.length > 0 && props.filteredList.length <= 2,
    medium: props.filteredList.length >= 3 && props.filteredList.length < 5,
    high: props.filteredList.length >= 5,
  });
  return (
    <section className="main__months">
      <ul className="months__list" onPointerOver={(e) => props.getMonth(e)}>
        <li id="0" className={itemClass}>
          January
        </li>
        <li id="1" className={itemClass}>
          February
        </li>
        <li id="2" className={itemClass}>
          March
        </li>
        <li id="3" className={itemClass}>
          April
        </li>
        <li id="4" className={itemClass}>
          May
        </li>
        <li id="5" className={itemClass}>
          June
        </li>
        <li id="6" className={itemClass}>
          July
        </li>
        <li id="7" className={itemClass}>
          August
        </li>
        <li id="8" className={itemClass}>
          September
        </li>
        <li id="9" className={itemClass}>
          October
        </li>
        <li id="10" className={itemClass}>
          November
        </li>
        <li id="11" className={itemClass}>
          December
        </li>
      </ul>
    </section>
  );
};

export default MonthsList;

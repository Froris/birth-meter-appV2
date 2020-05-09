// Получаем список людей и возвращаем их в store
// Т.К. сервер упал, импортируем функцию, возвращающую моковый список
import peopleList from "./data/";

const initialState = peopleList();

const peopleListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PEOPLE_FETCH_DATA_SUCCES":
      return action.payload;
    default:
      return state;
  }
};

export default peopleListReducer;

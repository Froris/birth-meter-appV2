const initialState = [];

const peopleListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PEOPLE_FETCH_DATA_SUCCES":
      return action.people;
    default:
      return state;
  }
};

export default peopleListReducer;

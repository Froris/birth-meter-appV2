// Получаем список людей и возвращаем их в store
const peopleListReducer = (state = [], action) => {
  switch (action.type) {
    case 'PEOPLE_FETCH_DATA_SUCCES':
      return action.payload;
    default:
      return state;
  }
};

export default peopleListReducer;
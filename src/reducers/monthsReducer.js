const getMonthReducer = (state = { month: null }, action) => {
  switch (action.type) {
    case "GET_MONTH":
      return action.payload;
    default:
      return state;
  }
};

export default getMonthReducer;

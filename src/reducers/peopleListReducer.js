// Получаем список людей и возвращаем их в store
const initialState = [
	{
		name: 'Vasya',
		DOB: '1992-02-13'
	},
	{
		name: 'Nika',
		DOB: '1972-02-18'
	},
	{
		name: 'Chester',
		DOB: '1971-02-21'
	},
	{
		name: 'Amiya',
		DOB: '2002-08-13'
	},
	{
		name: 'Rosa',
		DOB: '2000-08-19'
	},
	{
		name: 'Alex',
		DOB: '1992-02-13'
	},
	{
		name: 'Kolya',
		DOB: '1992-02-13'
	},
	{
		name: 'Andrew',
		DOB: '1992-02-13'
	},
	{
		name: 'Sasha',
		DOB: '1992-02-13'
	},
	{
		name: 'Ivan',
		DOB: '1992-04-13'
	},
	{
		name: 'Vasya',
		DOB: '1992-04-13'
	},
	{
		name: 'Nekit',
		DOB: '1992-04-23'
	},
	{
		name: 'Gordon',
		DOB: '1992-01-28'
	},
	{
		name: 'Atago',
		DOB: '1992-08-02'
	},
	{
		name: 'Amagi',
		DOB: '1992-08-23'
	},
	{
		name: 'Kaga',
		DOB: '1992-08-13'
	},
	{
		name: 'Hoshiro',
		DOB: '1992-02-14'
	},
	{
		name: 'Nelson',
		DOB: '1992-01-11'
	},
]

const peopleListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PEOPLE_FETCH_DATA_SUCCES':
      return action.payload;
    default:
      return state;
  }
};

export default peopleListReducer;
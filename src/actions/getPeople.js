// import axios from 'axios';

// const url = 'https://yalantis-react-school.herokuapp.com/api/task0/users';

// export const startGetPeople = () => async(dispatch) => {
// 	try {
// 		const response = await axios.get(url);
// 		const peopleList = response.data;
// 		dispatch(fetchPeopleSuccess(peopleList))
// 	} catch(e){
// 		console.log(e)
// 	}
// }

// export function fetchPeopleSuccess(people){
// 	return {
// 		type: 'PEOPLE_FETCH_DATA_SUCCES',
// 		payload : people
//   }
// }
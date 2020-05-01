const getFilteredList = (peopleList, month) => {
	if(peopleList && month){
		return [{name: 'Khola', age: 21}]
	}

	return []
}

export default getFilteredList;
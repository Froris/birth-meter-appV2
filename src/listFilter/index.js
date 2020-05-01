const getFilteredList = (peopleList, month = null) => {
	if(peopleList.length > 0 && month !== null){
		return peopleList.filter((item) => {
				const newMonth = new Date(item.DOB).getMonth();
				return newMonth === +month
		})
	}

	console.log('Error! People list or month was not provided to the filter');
	return []
}

export default getFilteredList;
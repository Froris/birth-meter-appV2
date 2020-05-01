const getMonth = (month) => ({
	type: 'GET_MONTH',
	payload: month
})

export const startGetMonth = (e) => (dispatch) => {
	if(e.target.className === 'list__item'){
		const month = e.target.id
		dispatch(getMonth(month))
	}
}

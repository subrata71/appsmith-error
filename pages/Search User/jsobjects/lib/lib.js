export default {
	getTableDataCount(){
		let res = getUser.data.data.count
		return res
	},
	getTableData(){
		let res = []
		getUser.data.data.kycs.forEach(item => {
			let temp = {
				user_id: item.user_id,
				email: item.email,
				name: `${item.name.first_name} ${item.name.middle_name} ${item.name.last_name}`,
				phone: `${item.country_code} ${item.phone}`
			}
			res.push(temp)
		})
		return res
	}
}
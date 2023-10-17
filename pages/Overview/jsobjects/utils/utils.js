export default {
	formatCurrency(result){
		let formatter = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 2,
		});
			
 		return formatter.format(result)
	},
	toCapital(string){
		let res
		if(string && string[0]){
			res = string[0].toUpperCase() + string.slice(1);			
		}
		return res
	}
}
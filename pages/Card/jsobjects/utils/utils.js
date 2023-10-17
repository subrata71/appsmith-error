export default {
	formatCurrency(result){
		let formatter = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 2,
		});
			
 		return formatter.format(result)
	},
}
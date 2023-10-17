export default {
	
	dayCountOverHundredData:{
		'loading': false,
		'error': null,
		'data': {
			
		}
	},
	async getDayCountOverHundred(){
		try {
			this.dayCountOverHundredData.loading = true;
			// lib.getOverviewObject();
			this.dayCountOverHundredData.error = null;
			await getDaysBalanceOverHundred.run();
			this.dayCountOverHundredData.data = getDaysBalanceOverHundred.data;
		} catch(err){
			showAlert(err?.message, 'error');
			this.dayCountOverHundredData.error = err;
		}
		this.dayCountOverHundredData.loading = false;
		return this.dayCountOverHundredData
	},
	
	totalVolumeTxnsData:{
		'loading': false,
		'error': null,
		'data': {
			
		}
	},
	async getTotalVolumeTxns(){
		try {
			this.totalVolumeTxnsData['loading'] = true;
			this.totalVolumeTxnsData['error'] = null;
			await getTotalTransactionVolume.run();
			this.totalVolumeTxnsData.data = getTotalTransactionVolume.data;
		} catch(err){
			showAlert(err?.message, 'error');
			this.totalVolumeTxnsData['error'] = err;
		}
		this.totalVolumeTxnsData.loading = false;
		return this.totalVolumeTxnsData
	},
	
	negativeBalanceData:{
		'loading': false,
		'error': null,
		'data': {
			
		}
	},
	async getNegativeBalance(){
		try {
			this.negativeBalanceData['loading'] = true;
			this.negativeBalanceData['error'] = null;
			await negativeBalance.run();
			this.negativeBalanceData.data = negativeBalance.data;
		} catch(err){
			showAlert(err?.message, 'error');
			this.negativeBalanceData['error'] = err;
		}
		this.negativeBalanceData.loading = false;
		return this.negativeBalanceData
	},
	
	transactionDisputesData:{
		'loading': false,
		'error': null,
		'data': {
			
		}
	},
	async getTransactionDisputes(){
		try {
			this.transactionDisputesData['loading'] = true;
			this.transactionDisputesData['error'] = null;
			await getTransactionDisputes.run();
			this.transactionDisputesData.data = getTransactionDisputes.data;
		} catch(err){
			showAlert(err?.message, 'error');
			this.transactionDisputesData['error'] = err;
		}
		this.transactionDisputesData.loading = false;
		return this.transactionDisputesData
	},
	
	disputesInfoData:{
		'loading': false,
		'error': null,
		'data': {
			
		}
	},
	async getDisputesInfo(){
		try {
			this.disputesInfoData['loading'] = true;
			this.disputesInfoData['error'] = null;
			await disputesInfo.run();
			this.disputesInfoData.data = disputesInfo.data;
		} catch(err){
			showAlert(err?.message, 'error');
			this.disputesInfoData['error'] = err;
		}
		this.disputesInfoData.loading = false;
		return this.disputesInfoData
	},
	
	childReferralsData:{
		'loading': false,
		'error': null,
		'data': {
			
		}
	},
	async getChildReferrals(){
		try {
			this.childReferralsData['loading'] = true;
			this.childReferralsData['error'] = null;
			await getChildReferrals.run();
			this.childReferralsData.data = getChildReferrals.data;
		} catch(err){
			showAlert(err?.message, 'error');
			this.childReferralsData['error'] = err;
		}
		this.childReferralsData.loading = false;
		return this.childReferralsData
	},
	
	astraCardDetails:{
		'loading': false,
		'error': null,
		'data': {
			
		}
	},
	async getAstraCardDetails(){
		try {
			this.astraCardDetails['loading'] = true;
			this.astraCardDetails['error'] = null;
			await getAstraCardDetails.run();
			this.astraCardDetails.data = getAstraCardDetails.data;
		} catch(err){
			showAlert(err?.message, 'error');
			this.astraCardDetails['error'] = err;
		}
		this.astraCardDetails.loading = false;
		return this.astraCardDetails
	},

	currentLocationData:{
		'loading': false,
		'error': null,
		'data': {
			
		}
	},
	async getCurrentLocation(){
		try {
			this.currentLocationData['loading'] = true;
			this.currentLocationData['error'] = null;
			await getCurrentLocation.run();
			this.currentLocationData.data = getCurrentLocation.data;
		} catch(err){
			showAlert(err?.message, 'error');
			this.currentLocationData['error'] = err;
		}
		this.currentLocationData.loading = false;
		return this.currentLocationData
	},
	
	locationData:{
		'loading': false,
		'error': null,
		'data': {
			
		}
	},
	async getLocationData(){
		try {
			this.locationData['loading'] = true;
			this.locationData['error'] = null;
			await getLocationData.run();
			this.locationData.data = getLocationData.data;
		} catch(err){
			showAlert(err?.message, 'error');
			this.currentLocationData['error'] = err;
		}
		this.currentLocationData.loading = false;
		return this.currentLocationData
	},
	
	loggedInDevicesData:{
		'loading': false,
		'error': null,
		'data': {
			
		}
	},
	async getLoggedInDevices(){
		try {
			this.loggedInDevicesData['loading'] = true;
			this.loggedInDevicesData['error'] = null;
			await loggedInDevices.run();
			this.loggedInDevicesData.data = loggedInDevices.data;
		} catch(err){
			showAlert(err?.message, 'error');
			this.loggedInDevicesData['error'] = err;
		}
		this.loggedInDevicesData.loading = false;
		return this.currentLocationData
	},
	
	totalTradingRevenue:{
		'loading': false,
		'error': null,
		'data': {
			
		}
	},
	async getTotalTradingRevenue(){
		try {
			this.totalTradingRevenue['loading'] = true;
			this.totalTradingRevenue['error'] = null;
			await getTotalTradingRevenue.run();
			this.totalTradingRevenue.data = getTotalTradingRevenue.data;
		} catch(err){
			showAlert(err?.message, 'error');
			this.totalTradingRevenue['error'] = err;
		}
		this.totalTradingRevenue.loading = false;
		return this.totalTradingRevenue
	},
	
	j2JSentData:{
		'loading': false,
		'error': null,
		'data': {
			
		}
	},
	async getJ2JSent(){
		try {
			this.j2JSentData['loading'] = true;
			this.j2JSentData['error'] = null;
			await getJ2JSent.run();
			this.j2JSentData.data = getJ2JSent.data;
		} catch(err){
			showAlert(err?.message, 'error');
			this.j2JSentData['error'] = err;
		}
		this.j2JSentData.loading = false;
		return this.j2JSentData
	},
	
	j2JReceivedData:{
		'loading': false,
		'error': null,
		'data': {
			
		}
	},
	async getJ2JReceived(){
		try {
			this.j2JReceivedData['loading'] = true;
			this.j2JReceivedData['error'] = null;
			await getJ2JReceived.run();
			this.j2JReceivedData.data = getJ2JReceived.data;
		} catch(err){
			showAlert(err?.message, 'error');
			this.j2JSentData['error'] = err;
		}
		this.j2JSentData.loading = false;
		return this.j2JSentData
	},
	
	p2pIncomingData:{
		'loading': false,
		'error': null,
		'data': {
			
		}
	},
	async getP2pIncoming(){
		try {
			this.p2pIncomingData['loading'] = true;
			this.p2pIncomingData['error'] = null;
			await p2pIncomingGreater1000.run();
			this.p2pIncomingData.data = p2pIncomingGreater1000.data;
		} catch(err){
			showAlert(err?.message, 'error');
			this.p2pIncomingData['error'] = err;
		}
		this.p2pIncomingData.loading = false;
		return this.p2pIncomingData
	},
	
	p2pOutgoingData:{
		'loading': false,
		'error': null,
		'data': {
			
		}
	},
	async getP2pOutgoing(){
		try {
			this.p2pOutgoingData['loading'] = true;
			this.p2pOutgoingData['error'] = null;
			await p2pOutgoingGreater1000.run();
			this.p2pOutgoingData.data = p2pOutgoingGreater1000.data;
		} catch(err){
			showAlert(err?.message, 'error');
			this.p2pOutgoingData['error'] = err;
		}
		this.p2pOutgoingData.loading = false;
		return this.p2pOutgoingData
	},
	
	piiUpdateBeforeFirstTxnData:{
		'loading': false,
		'error': null,
		'data': {
			
		}
	},
	async getPiiUpdateBeforeFirstTxn(){
		try {
			this.piiUpdateBeforeFirstTxnData['loading'] = true;
			this.piiUpdateBeforeFirstTxnData['error'] = null;
			await piiUpdateBeforeFirstTxn.run();
			this.piiUpdateBeforeFirstTxnData.data = piiUpdateBeforeFirstTxn.data;
		} catch(err){
			showAlert(err?.message, 'error');
			this.piiUpdateBeforeFirstTxnData['error'] = err;
		}
		this.piiUpdateBeforeFirstTxnData.loading = false;
		return this.piiUpdateBeforeFirstTxnData
	},
	
	piiUpdateCountData:{
		'loading': false,
		'error': null,
		'data': {

		}
	},
	async getPiiUpdateCount(){
		try {
			this.piiUpdateCountData['loading'] = true;
			this.piiUpdateCountData['error'] = null;
			await piiUpdateCount.run();
			this.piiUpdateCountData.data = piiUpdateCount.data;
		} catch(err){
			showAlert(err?.message, 'error');
			this.piiUpdateCountData['error'] = err;
		}
		this.piiUpdateCountData.loading = false;
		return this.piiUpdateCountData
	},
	
	cancelledTransactionsPercentData:{
		'loading': false,
		'error': null,
		'data': {

		}
	},
	async getCancelledTransactionsPercent(){
		try {
			this.cancelledTransactionsPercentData['loading'] = true;
			this.cancelledTransactionsPercentData['error'] = null;
			await cancelledTransactionsPercent.run();
			this.cancelledTransactionsPercentData.data = cancelledTransactionsPercent.data;
		} catch(err){
			showAlert(err?.message, 'error');
			this.cancelledTransactionsPercentData['error'] = err;
		}
		this.cancelledTransactionsPercentData.loading = false;
		return this.j2JSentData
	},
	
	ipHoppingUserData:{
		'loading': false,
		'error': null,
		'data': {

		}
	},
	async getIpHoppingUser(){
		try {
			this.ipHoppingUserData['loading'] = true;
			this.ipHoppingUserData['error'] = null;
			await ipHoppingUser.run();
			this.ipHoppingUserData.data = ipHoppingUser.data;
		} catch(err){
			showAlert(err?.message, 'error');
			this.ipHoppingUserData['error'] = err;
		}
		this.ipHoppingUserData.loading = false;
		return this.ipHoppingUserData
	},
	
	provisionalCreditData:{
		'loading': false,
		'error': null,
		'data': {

		}
	},
	async getProvisionalCredit(){
		try {
			this.provisionalCreditData['loading'] = true;
			this.provisionalCreditData['error'] = null;
			await provisionalCredit.run();
			this.provisionalCreditData.data = provisionalCredit.data;
		} catch(err){
			showAlert(err?.message, 'error');
			this.provisionalCreditData['error'] = err;
		}
		this.provisionalCreditData.loading = false;
		return this.provisionalCreditData
	},
	
	positiveStrikeData:{
		'loading': false,
		'error': null,
		'data': {

		}
	},
	async getPositiveStrike(){
		try {
			this.positiveStrikeData['loading'] = true;
			this.positiveStrikeData['error'] = null;
			await getPositiveStrike.run();
			this.positiveStrikeData.data = getPositiveStrike.data;
		} catch(err){
			showAlert(err?.message, 'error');
			this.positiveStrikeData['error'] = err;
		}
		this.positiveStrikeData.loading = false;
		return this.positiveStrikeData
	},
	
	citiesListData:{
		'loading': false,
		'error': null,
		'data': {

		}
	},
	async getCitiesList(){
		try {
			this.citiesListData['loading'] = true;
			this.citiesListData['error'] = null;
			await getCitiesList.run();
			this.citiesListData.data = getPositiveStrike.data;
		} catch(err){
			showAlert(err?.message, 'error');
			this.citiesListData['error'] = err;
		}
		this.citiesListData.loading = false;
		return this.citiesListData
	},
	
	countriesListData:{
		'loading': false,
		'error': null,
		'data': {

		}
	},
	async getCountriesList(){
		try {
			this.countriesListData['loading'] = true;
			this.countriesListData['error'] = null;
			await getCountriesList.run();
			this.countriesListData.data = getPositiveStrike.data;
		} catch(err){
			showAlert(err?.message, 'error');
			this.countriesListData['error'] = err;
		}
		this.countriesListData.loading = false;
		return this.countriesListData
	},


}
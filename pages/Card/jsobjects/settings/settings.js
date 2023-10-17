export default {
    roles: {
        admin: ['mukesh@onjuno.com', 'pratik@onjuno.com', 'rasleen@onjuno.com', 'neil@onjuno.com', 'sid@onjuno.com'],
        risk: ['nitin@onjuno.com', 'pradeep@onjuno.com', 'michelle@onjuno.com', 'prashanth@onjuno.com', 'ankita@onjuno.com', 'chandana@onjuno.com', 'vijay@onjuno.com', 'murali@onjuno.com'],
        cs_lead: ['pallavi@onjuno.com', 'priya@onjuno.com', 'neil@onjuno.com', 'nazim@onjuno.com', 'vidyut@onjuno.com', 'ujjwal@onjuno.com', 'shubham@onjuno.com', 'anoushka@onjuno.com'],
        product: ['ankit@onjuno.com'],
        generic: [] //default role
    },
    config: {
        tiers: {
            4: {
                name: 'metal',
                display: 'Metal'
            },
            5: {
                name: 'basic',
                display: 'Basic'
            },
            6: {
                name: 'basic_enhanced',
                display: 'Basic Enhanced'
            },
            7: {
                name: 'basic_minus',
                display: 'Basic Minus'
            },
            8: {
                name: 'basic_pro',
                display: 'Basic Pro'
            },
            9: {
                name: 'metal_minus',
                display: 'Metal Minus'
            }
        }
    },
    setStore: () => {        
				const data = {
					inputSelect: inputSelect.selectedOptionValue,
					inputValue: inputUser.text || ''
				}
        storeValue('inputData', data, false)
    },
	  getInputData: () => {
			return appsmith.store.inputData || {inputSelect: 'email', inputValue: ''}			
		}
}
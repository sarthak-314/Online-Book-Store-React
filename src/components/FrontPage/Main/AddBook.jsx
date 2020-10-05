import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Alert  } from 'antd'

const AddYoBook = () => {
	const history = useHistory()
	const errorMessage = useSelector(state => state.error)
	const [showAlert, setShowAlert] = useState(true)

	var AlertBoi = null
	if(errorMessage !== '' && errorMessage && showAlert) {
		const alertMessage = 'ERROE : ' + errorMessage
		AlertBoi =  
		<Alert message={alertMessage}
		 style={{marginTop: '-45px', marginBottom: '45px'}}
		 className='add-hover'
		 type='error'
		onClick={() => setShowAlert(false)}
		/>
	} 

	return (
		<>
	
	<div class='add-yo-book'
	onClick={() => history.push('/upload')}>
		Add Your Book Here
	</div>
	{AlertBoi}
	</>
	)
}

export default AddYoBook
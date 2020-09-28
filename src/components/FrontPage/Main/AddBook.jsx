import React from 'react'
import { useHistory } from 'react-router-dom'

const AddYoBook = () => {
	const history = useHistory()

	return (
	<div class='add-yo-book'
	onClick={() => history.push('/upload')}>
		Add Your Book Here
	</div>
	)
}

export default AddYoBook
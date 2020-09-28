import React from 'react'

const MsgSeller = props => {

	const { name, time, msg } = props

	return (
			<li>
            <div class="message-data">
              <span class="message-data-name"><i class="fa fa-circle online"></i> {name} </span>
              <span class="message-data-time"> {time} </span>
            </div>
            <div class="message my-message">
            	{msg}
            </div>
          </li>
          
	)
}

export default MsgSeller
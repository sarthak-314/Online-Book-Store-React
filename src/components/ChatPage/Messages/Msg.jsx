import React from 'react'

const Msg = props => {

	const { name, time, msg } = props


	return (
			<li class="clearfix">
            <div class='message-data align-right'>
              <span class="message-data-time" >{time}</span> &nbsp; &nbsp;
              <span class="message-data-name" >{name}</span> <i class='fa fa-circle me'></i>
            </div>
            <div class="message other-message float-right">
            	{msg}
            </div>
        </li>
          
	)
}

export default Msg
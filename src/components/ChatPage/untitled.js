
	const [sender, setSender] = useState('SB')
	const [receiver, setReceiver] = useState('')
	const [sellerList, setSellerList] = useState([])
	const [buyerList, setBuyerList] = useState([])
	const [messageText, setMessageText] = useState('')
	const [messages, setMessages] = useState([{isMe: true,
				
													      time:'10:10 AM, Today',
													      text:'Shit be hella lit, fam'
															}, {
															isMe: false, 
															time:'10:10AM ', 
															text: 'Boi' 
															}])

	const ENDPOINT = 'localhost:5000'

	// We get all the location and stuff from react-router
	// This useEffect is for the user joining
	useEffect(() => {

		const { buyer, seller } = queryString.parse(location.search)
		const room = buyer.concat(seller)

		socket = io(ENDPOINT) 

		// Telling the server I'm joining baby
		socket.emit('join', ({ buyer, seller, room }), error => {
			if(error) alert(error)
		})

		socket.on('prevMsgs', ({messages}) => {
			const clientMessages = {messages.}
		})

	}, [ENDPOINT, location.search])


	// If I receive a message, gotta refresh the fkin window
	useEffect(() => {
		// If the seller sends message
		socket.on('message', message => {
			setMessages([...messages, message])
		})

	}, [])

	const onSendMsg = event => {
		event.preventDefault()
		if(messageText) {
			const newMsg = { sender, buyer, seller, text: messageText }
			socket.emit('sendMsg', message, () => setMessage(''))
		}
	}

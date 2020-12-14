const app = new Vue(
	{

		el: "#wrapper",
		data: {
			contacts: [
				{
					name: 'Snoop',
					avatar: 'img/avatar_1.jpg',
					altAvatar: "avatar 1",
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							text: 'Hai portato a spasso il cane?',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							text: 'Ricordati di dargli da mangiare',
							status: 'sent'
						},
						{
							date: '10/01/2020 16:15:22',
							text: 'Tutto fatto!',
							status: 'received'
						}
					],
				},
				{
					name: 'Billy',
					avatar: 'img/avatar_2.jpg',
					altAvatar: "avatar 2",
					visible: true,
					messages: [
						{
							date: '20/03/2020 16:30:00',
							text: 'Ciao come stai?',
							status: 'sent'
						},
						{
							date: '20/03/2020 16:30:55',
							text: 'Bene grazie! Stasera ci vediamo?',
							status: 'received'
						},
						{
							date: '20/03/2020 16:35:00',
							text: 'Mi piacerebbe ma devo andare a fare la spesa.',
							status: 'sent'
						}
					],
				},
				{
					name: 'Chuck',
					avatar: 'img/avatar_3.jpg',
					altAvatar: "avatar 3",
					visible: true,
					messages: [
						{
							date: '28/03/2020 10:10:40',
							text: 'La Marianna va in campagna',
							status: 'received'
						},
						{
							date: '28/03/2020 10:20:10',
							text: 'Sicuro di non aver sbagliato chat?',
							status: 'sent'
						},
						{
							date: '28/03/2020 16:15:22',
							text: 'Ah scusa!',
							status: 'received'
						}
					],
				},
				{
					name: 'Emily',
					avatar: 'img/avatar_4.jpg',
					altAvatar: "avatar 4",
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							text: 'Lo sai che ha aperto una nuova pizzeria?',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							text: 'Si, ma preferirei andare al cinema',
							status: 'received'
						}
					],
				},
			],
			activeIndex: 0,
			currentDate: "",
			userSearchInput: "",
			userMessageInput: "",
			newSendMessage: {},
			newReceivedMessage: {}
		},
		methods: {

			addActiveClass: function (index) {
				this.contacts.forEach(
					(element, i) => {
						element.visible = false;
					}
				);
				this.activeIndex = index;
				this.contacts[index].visible = true;
			},

			sendMessage: function() {
				// entro nell'array dei messaggi dell'utente in cui clicco
				let contactMessageArchive = this.contacts[this.activeIndex].messages;

				// compilo e creo tutti i campi dell'oggetto newsendMessage
				this.newSendMessage.text = this.userMessageInput;
				this.userMessageInput = "";  // cancello il campo input
				this.newSendMessage.status = "sent";
				this.newSendMessage.date = dayjs().format('DD/MM/YYYY H:mm:ss');
				contactMessageArchive.push(this.newSendMessage);
				this.newSendMessage = {}; // svuoto il campo del newSendMessage

				// dopo un secondo ritorno un messaggio automatico con scritto Ok!
				setTimeout(
					() => {
						this.newReceivedMessage.text = "Ok!",
						this.newReceivedMessage.date = dayjs().format('DD/MM/YYYY H:mm:ss');
						this.newReceivedMessage.status = "received",
						contactMessageArchive.push(this.newReceivedMessage);
						this.newReceivedMessage = {}; // svuoto l'oggetto del nuovo messaggio ricevuto
					}, 1000);
			},

			searchContact: function() {
				// console.log(this.contacts[0].name.includes(this.userSearchInput));
				this.contacts.forEach(
					(element) => {
						element.visible = false;
						if (element.name.includes(this.userSearchInput)) {
							element.visible = true;
						}
						console.log(element.visible);
					}
				);
			}

		}

	}
);

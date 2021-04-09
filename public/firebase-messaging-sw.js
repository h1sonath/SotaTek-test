importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js')
firebase.initializeApp({
	apiKey: 'AIzaSyDNpMx-mkQNh728jmVO55jmA-crwyjGQmc',
	authDomain: 'bigdat-fa688.firebaseapp.com',
	databaseURL: 'https://bigdat-fa688.firebaseio.com',
	projectId: 'bigdat-fa688',
	storageBucket: 'bigdat-fa688.appspot.com',
	messagingSenderId: '133775651035',
	appId: '1:133775651035:web:6fb0d57b374e0769041cfe'
})
const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function(payload) {
	console.log(
		'[firebase-messaging-sw.js] Received background message ',
		payload
	)
	// Customize notification here
	const notificationTitle = 'Background Message Title'
	const notificationOptions = {
		body: 'Background Message body.',
		icon: '/firebase-logo.png'
	}

	return self.registration.showNotification(
		notificationTitle,
		notificationOptions
	)
})

import {Platform} from 'react-native';
var PushNotification = require('react-native-push-notification');

PushNotification.configure({

    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function(token) {
        console.log( 'TOKEN:', token );
    },

    // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
    },

    // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications) 
    senderID: "YOUR GCM SENDER ID",

    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
        alert: true,
        badge: true,
        sound: true
    },

    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,

    /**
      * (optional) default: true
      * - Specified if permissions (ios) and token (android and ios) will requested or not,
      * - if not, you must call PushNotificationsHandler.requestPermissions() later
      */
 	requestPermissions: Platform.OS === 'ios',
});


	PushNotification.createChannel (
		{
		channelId: "com.weatherapp", // (required)
		channelName: "com.weatherapp", // (required)
		channelDescription: "A channel to categorize your notifications", // (optional) default: undefined.
		playSound: false, // (optional) default: true
		soundName: "default", // (optional) See soundName parameter of localNotification function
		importance: 4, // (optional) default: 4. Int value of the Android notification importance
		vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
		},
		(created) => console.log(`createChannel returned ${created}`),
		// (optional) callback returns whether the channel was created, false means it already existed.
	);

export default PushNotification;

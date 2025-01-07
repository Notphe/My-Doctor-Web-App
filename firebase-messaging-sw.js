// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: 'AIzaSyA9RZkpdhOak6lZ4leHNfUujyLYF8Qi6uY',
    appId: '1:151957913127:web:3a05602203c748a56dd802',
    messagingSenderId: '151957913127',
    projectId: 'my-doctor-2d191',
    authDomain: 'my-doctor-2d191.firebaseapp.com',
    storageBucket: 'my-doctor-2d191.firebasestorage.app',
    measurementId: 'G-1X4937CLLM',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message: ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/your-icon.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

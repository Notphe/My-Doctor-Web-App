// Import the functions you need from the Firebase SDK
importScripts("https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.17.2/firebase-messaging.js");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9RZkpdhOak6lZ4leHNfUujyLYF8Qi6uY",
  authDomain: "my-doctor-2d191.firebaseapp.com",
  projectId: "my-doctor-2d191",
  storageBucket: "my-doctor-2d191.firebasestorage.app",
  messagingSenderId: "151957913127",
  appId: "1:151957913127:web:3a05602203c748a56dd802",
  measurementId: "G-1X4937CLLM",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);

  // Customize the notification
  const notificationTitle = payload.notification.title || "Default Title";
  const notificationOptions = {
    body: payload.notification.body || "Default body content",
    icon: payload.notification.icon || "/default-icon.png", // Replace with your own icon path
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

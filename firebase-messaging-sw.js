// Import Firebase scripts
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9RZkpdhOak6lZ4leHNfUujyLYF8Qi6uY",
  authDomain: "my-doctor-2d191.firebaseapp.com",
  projectId: "my-doctor-2d191",
  storageBucket: "my-doctor-2d191.appspot.com",
  messagingSenderId: "151957913127",
  appId: "1:151957913127:web:3a05602203c748a56dd802",
  measurementId: "G-1X4937CLLM",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve Firebase Messaging instance
const messaging = firebase.messaging();

// Handle background notifications
messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);

  const notificationTitle = payload.notification.title || "Default Title";
  const notificationOptions = {
    body: payload.notification.body || "Default body content",
    icon: payload.notification.icon || "/default-icon.png", // Update with your icon path
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

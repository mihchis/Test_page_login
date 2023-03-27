// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCssbb2-7zK0-3oLEAWgGON71HlV2G6MNI",
    authDomain: "signinwithemailandpasswo-d2402.firebaseapp.com",
    projectId: "signinwithemailandpasswo-d2402",
    storageBucket: "signinwithemailandpasswo-d2402.appspot.com",
    messagingSenderId: "879162839067",
    appId: "1:879162839067:web:1cd9afb51801e96fb168be",
    measurementId: "G-0NFXDYDQK9"
  };
  firebase.initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  // Get elements
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const loginButton = document.getElementById('login-button');
  
  // Add login event
  loginButton.addEventListener('click', (e) => {
    e.preventDefault();
  
    // Get email and password
    const userEmail = email.value;
    const userPassword = password.value;
  
    // Sign in
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
    .then((userCredential) => {
      // Signed in successfully
      console.log(userCredential.user);
    })
    .catch((error) => {
      // Sign in failed
      console.error(error.code, error.message);
    });
});

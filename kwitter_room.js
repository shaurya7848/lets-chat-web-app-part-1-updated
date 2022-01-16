const firebaseConfig = {
      apiKey: "AIzaSyCAQdVrL_IrtaOz0vVeCz1vFIRpRlp291w",
      authDomain: "lets-chat-web-app-projec-2a325.firebaseapp.com",
      projectId: "lets-chat-web-app-projec-2a325",
      storageBucket: "lets-chat-web-app-projec-2a325.appspot.com",
      messagingSenderId: "665438296247",
      appId: "1:665438296247:web:9b81c72290125a70c8d532"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

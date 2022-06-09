
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAe3Smuz5tAcMgn5rkBkBtlodFkLMGUPT8",
    authDomain: "lets-chat-c018a.firebaseapp.com",
    databaseURL: "https://lets-chat-c018a-default-rtdb.firebaseio.com",
    projectId: "lets-chat-c018a",
    storageBucket: "lets-chat-c018a.appspot.com",
    messagingSenderId: "498328290639",
    appId: "1:498328290639:web:0ba7ba651bd550381f313a"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
   user_name = localStorage.getItem("user_name" , user_name);
   document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";
   function addRoom() {
     room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
       purpose:"adding room name"
     });
     localStorage.setItem("room_name" , room_name);
     window.location = "kwitter_page.html";
   }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter.html";
  }
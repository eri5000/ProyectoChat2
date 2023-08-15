var firebaseConfig = {
  apiKey: "AIzaSyBt3rqjjvR3LjxFqJG5I7jSnSw5Buz0ies",
  authDomain: "chatonline-cd0aa.firebaseapp.com",
  databaseURL: "https://chatonline-cd0aa-default-rtdb.firebaseio.com",
  projectId: "chatonline-cd0aa",
  storageBucket: "chatonline-cd0aa.appspot.com",
  messagingSenderId: "1048119489884",
  appId: "1:1048119489884:web:d77c7a589bd9b7fd55fd99"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML="Hola " + user_name;

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });

  localStorage.setItem("room_name" , room_name);
  window.location.replace("Kwitter_page.html");
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  //Inicia código
  console.log("room_name = " + Room_names);
  row="<div class='room_name' id=" + Room_names + " onclick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div> <br>";
  document.getElementById("output").innerHTML += row;
  //Termina código
  });});}
  getData();

  function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("room_name" , name);
   window.location="Kwitter_page.html";
  }
  
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
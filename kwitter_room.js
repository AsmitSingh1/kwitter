
const firebaseConfig = {
      apiKey: "AIzaSyCupqjuu_p6PgGPAvBfPHnmX8tRZNtorQI",
      authDomain: "temp-f1b9a.firebaseapp.com",
      databaseURL: "https://temp-f1b9a-default-rtdb.firebaseio.com",
      projectId: "temp-f1b9a",
      storageBucket: "temp-f1b9a.appspot.com",
      messagingSenderId: "215822081368",
      appId: "1:215822081368:web:d41d58e9af5082485d592d"
    };

    //initialize firebase
    firebase.initializeApp(config);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });

          localStorage.setItem("room_name" , room_name);
          window.location = "kwitter_page.html";

    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      
      Room_names = childKey;
      //Start code
      console.log("room name -"+room_name);
      row= "<div class='room_name' id="+room_names+"onclick='redirectToRoomName(this.id)'>#"+room_name+"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "kwitter_page.html";
}
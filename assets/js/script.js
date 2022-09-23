// Get the modal
var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const form = document.getElementById("new-user")
const usernameDom = document.getElementById("username")
const usernameStorage = localStorage.getItem("username")


console.log(usernameStorage, '<==temp')

form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(form[0].value)
    const username = form[0].value;

    if(username.trim() == ""){
        alert("please enter username")
    }else{
        window.location = 'game.html'
       localStorage.setItem("username", username)
    }

})


window.onload = setInterval(function() {
fetch("https://hidden-headland-7200.herokuapp.com/")
.then(res=>res.json())
.then((allMessages) => {
    let x = '';
    for (let i = 0; i < allMessages.length; i++) {
    x += allMessages[i].name+": "+allMessages[i].message+"<br>";
  }
  document.querySelector('#messagesWindow').innerHTML = x;
})
},500);




document.querySelector("#postMessageButton").addEventListener("click", function() {
  fetch("https://hidden-headland-7200.herokuapp.com/new", {
  method: "POST",
  body: JSON.stringify({name:document.querySelector("#OPname").value, message:document.querySelector("#messageContent").value}),
  headers: { 'Content-Type': 'application/json' }
})
.then( function reloadMessages(response) {
  if (response.ok) {
fetch("https://hidden-headland-7200.herokuapp.com/")
.then(res=>res.json())
.then((allMessages) => {
    let x = '';
    for (let i = 0; i < allMessages.length; i++) {
    x += allMessages[i].name+": "+allMessages[i].message+"<br>";
  }
  document.querySelector('#messagesWindow').innerHTML = x;
})
}
})
})

// This is a single line comment, started with two slashes ¿AND END WITH DOT COMA?;
// <script>  alert("Hello");</script> (example for html command for JS);

console.log("Welcome to my portfolio!!")

function menuToggle () {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}

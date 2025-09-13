import './style.css'

var app = document.getElementById('typing');
const useString = app.innerHTML

var typewriter = new Typewriter(app, {
    loop: false
});

typewriter.typeString(useString)
    .pauseFor(5000)
    .start();

AOS.init();
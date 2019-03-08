console.log("loaded")

var numIn = document.getElementById('numIn');
var out = document.getElementById('out');
var submit = document.getElementById("submit");


submit.addEventListener("click", function() {
    if(numIn.value % 2 === 0) {
        out.textContent = "Yep, that's even"
    } else {
        out.textContent = "Nope, that's odd"
    }
    console.log(numIn.value);
})


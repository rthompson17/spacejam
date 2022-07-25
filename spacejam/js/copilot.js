// find all navigation text
// and make the text orange
function process() {
    var nav = document.getElementsByTagName("nav");
    for (var i = 0; i < nav.length; i++) {
        var links = nav[i].getElementsByTagName("a");
        for (var j = 0; j < links.length; j++) {
            links[j].style.color = "orange";
        }
    }
}

// add a container with a white background
// and a black text
function addContainer() {
    var container = document.createElement("div");
    container.style.backgroundColor = "white";
    container.style.color = "black";
    container.innerHTML = "This is a container";
    document.body.appendChild(container);
}
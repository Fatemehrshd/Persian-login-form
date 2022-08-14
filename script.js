let hw_name = document.querySelector(".hw-name");
let form    = document.querySelector(".form");
let container = document.querySelector(".container");
let sen     = document.querySelector("#security-sen");
// let mood    = document.querySelector(".mode");
let have_child = document.querySelector("#have-child-input");
let no_of_children = document.querySelector(".number-of-children");
let children = document.querySelector(".children_names");





function login_form() {
    form.style.display = "block";
}

function got_married() {
    hw_name.style.display = "block";
}

function is_single() {
    hw_name.style.display = "none";
}

function dark_mood() {
    if(document.getElementById('mode').checked == true){
        container.style.backgroundColor = "#36454F";
        sen.style.color = "white";
    }
    else {
        container.style.backgroundColor = "lightblue";
        sen.style.color = "darkblue";
    }
}

function select_have_child() {
    if (have_child.checked == true) {
        no_of_children.style.display = "block";
    }
    else {
        no_of_children.style.display = "none";
    }
}

function decrease_children() {
    children.removeChild(children.childNodes[0]);

}

function increase_children() {
    var name = document.createElement("input");
    name.type = "text";
    name.style.width = "100%";
    name.style.height = "20px";
    children.appendChild(name);
}
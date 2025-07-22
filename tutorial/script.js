
let employee = {
    firstName: "Ali",
    lastName: "Adam",
    job: "Accounting Teacher",
    org: "Makunudhoo School"
}

function greet() {
    let firstName = 'Mohamed';
    let lastName = 'Ibrahim';
    let fullName = firstName + " " + lastName;
    let job = "Software Developer";
    let org = "Makunudhoo School";
    let msg = `My name is ${fullName}. I am a ${job} working at ${org}`;

    document.getElementById("name").innerText = firstName;
    document.getElementById("bio").innerText = msg;
    document.body.style.backgroundColor = "#edededff"
}

let inputVal = prompt('Enter U name')
alert(inputVal)


let name = "Ali";

console.log(name);

if (name === "Husen") {
  // special message
} else {
  // general greeting
}


let age = prompt("How old are you?");
if (age >= 18) {
  alert("You are old enough!");
} else {
  alert("You're still young!");
}




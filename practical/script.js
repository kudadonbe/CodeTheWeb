
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




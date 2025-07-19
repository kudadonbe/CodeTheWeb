// script.js

let recipients = [];

const stored = localStorage.getItem("recipients");

if (stored) {
  recipients = JSON.parse(stored);
} else {
  recipients = sampleRecipients; // Comes from data.js
}

const output = document.getElementById("output");

for (let i = 0; i < recipients.length; i++) {
  const person = recipients[i];
  let template = document.getElementById(
    person.lang === "dv" ? "certificate-dv" : "certificate-en"
  );

  const clone = template.content.cloneNode(true);
  clone.querySelector(".name").textContent = person.title + " " + person.name;
  clone.querySelector(".desig").textContent = person.desig;
  clone.querySelector(".org").textContent = person.org;
  clone.querySelector(".duration").textContent =
    person.lang === "dv"
      ? "ކޯހުގެ މުއްދަތު: " + person.duration
      : "Course Duration: " + person.duration;
  clone.querySelector(".date").textContent = person.date;

  output.appendChild(clone);
}

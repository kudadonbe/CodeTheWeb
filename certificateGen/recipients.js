// Global recipients list
let recipients = [];

const stored = localStorage.getItem("recipients");

if (stored) {
  recipients = JSON.parse(stored);
} else {
  recipients = sampleRecipients; // Comes from data.js
}

let editingIndex = null;

// Get form elements
const langInput = document.getElementById("lang");
const titleInput = document.getElementById("title");
const nameInput = document.getElementById("name");
const desigInput = document.getElementById("desig");
const orgInput = document.getElementById("org");
const durationInput = document.getElementById("duration");
const dateInput = document.getElementById("date");
const saveBtn = document.getElementById("saveBtn");

const tableBody = document.getElementById("recipientTableBody");
const output = document.getElementById("output");

function saveRecipient() {
  const lang = langInput.value;
  const title = titleInput.value.trim();
  const name = nameInput.value.trim();
  const desig = desigInput.value.trim();
  const org = orgInput.value.trim();
  const duration = durationInput.value.trim();
  const date = dateInput.value.trim();

  const person = { lang, title, name, desig, org, duration, date };

  if (editingIndex === null) {
    // Add new
    recipients.push(person);
  } else {
    // Update existing
    recipients[editingIndex] = person;
    editingIndex = null;
    saveBtn.textContent = "Save";
  }

  localStorage.setItem("recipients", JSON.stringify(recipients));


  clearForm();
  renderTable();
  renderPreview(person); // Show preview for last added/edited
}

function renderTable() {
  const enTable = document.getElementById("table-en");
  const dvTable = document.getElementById("table-dv");

  enTable.innerHTML = "";
  dvTable.innerHTML = "";

  for (let i = 0; i < recipients.length; i++) {
    const r = recipients[i];
    const row = document.createElement("tr");

    const isDhivehi = r.lang === "dv";
    const editLabel = isDhivehi ? "ބަދަލުކުރޭ" : "Edit";
    const deleteLabel = isDhivehi ? "ފޮހެލާ" : "Delete";

    row.innerHTML = `
      <td>${i + 1}</td>
      <td>${r.title} ${r.name}</td>
      <td>${r.desig}</td>
      <td>${r.org}</td>
      <td>
        <button onclick="editRecipient(${i})">${editLabel}</button>
        <button onclick="deleteRecipient(${i})" style="background-color:red;">${deleteLabel}</button>
      </td>
    `;

    if (isDhivehi) {
      dvTable.appendChild(row);
    } else {
      enTable.appendChild(row);
    }
  }
}



function editRecipient(index) {
  const r = recipients[index];
  langInput.value = r.lang;
  titleInput.value = r.title;
  nameInput.value = r.name;
  desigInput.value = r.desig;
  orgInput.value = r.org;
  durationInput.value = r.duration;
  dateInput.value = r.date;

  editingIndex = index;
  saveBtn.textContent = "Update";
  if (r.lang == 'dv') { saveBtn.textContent = "އިސްލާހުކުރޭ"; }
  updateLanguageMode()

  renderPreview(r);
}

function deleteRecipient(index) {
  if (confirm("Are you sure you want to delete this recipient?")) {
    recipients.splice(index, 1);
   
    localStorage.setItem("recipients", JSON.stringify(recipients));

    renderTable();
    output.innerHTML = ""; // clear preview if needed
  }
}

function clearForm() {
  langInput.value = "en";
  titleInput.value = "";
  nameInput.value = "";
  desigInput.value = "";
  orgInput.value = "";
  durationInput.value = "";
  dateInput.value = "";
  editingIndex = null;
  saveBtn.textContent = "Save";
}

// Preview one certificate in #output
function renderPreview(person) {
  output.innerHTML = ""; // clear previous
  let template;

  if (person.lang === "dv") {
    template = document.getElementById("certificate-dv");
  } else {
    template = document.getElementById("certificate-en");
  }

  const clone = template.content.cloneNode(true);
  clone.querySelector(".name").textContent = `${person.title} ${person.name}`;
  clone.querySelector(".desig").textContent = person.desig;
  clone.querySelector(".org").textContent = person.org;
  clone.querySelector(".duration").textContent =
    person.lang === "dv"
      ? "ކޯސް ދުވަސް: " + person.duration
      : "Course Duration: " + person.duration;
  clone.querySelector(".date").textContent = person.date;

  output.appendChild(clone);
}

langInput.addEventListener("change", updateLanguageMode);

function updateLanguageMode() {
  const fieldset = document.querySelector("fieldset");
  const legend = document.getElementById("legend-text");
  const isDhivehi = langInput.value === "dv";

  // Apply or remove .dv class
  if (isDhivehi) {
    fieldset.classList.add("dv");
  } else {
    fieldset.classList.remove("dv");
  }

  // Update placeholders to match selected language
  legend.innerText = isDhivehi ? "ބައިވެރިންގެ މަޢުލޫމާތު" : "Recipient Information";
  titleInput.placeholder = isDhivehi ? "ޑރ، އަލްފާޟިލް" : "Title (Mr., Dr., etc.)";
  nameInput.placeholder = isDhivehi ? "ފުރިހަމަނަން" : "Full Name";
  desigInput.placeholder = isDhivehi ? "ހިސާބު ޓީޗަރު" : "Designation";
  orgInput.placeholder = isDhivehi ? "ސްކޫލްގެ ނަން" : "Organization";
  durationInput.placeholder = isDhivehi ? "ކޯހުގެ މުއްދަތު" : "Course Duration";
  dateInput.placeholder = isDhivehi ? "ސެޓްފިކެޓުގެ ތާރީޚު" : "Certificate Date";
  saveBtn.textContent = isDhivehi ? "ރައްކާކުރޭ" : "Save";

}

renderTable() // show sample data in table
updateLanguageMode(); // Apply on first load
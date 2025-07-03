function toggleVendorLists() {
  document.getElementById("agubalaa-vendors").style.display =
  document.getElementById("agubalaaBox").checked ? "flex" : "none";
  document.getElementById("qr-vendors").style.display = document.getElementById(
    "qrBox"
  ).checked
    ? "flex"
    : "none";
}

function togglePRF(show) {
  document.getElementById("prfRefBlock").style.display = show
    ? "block"
    : "none";
  document.getElementById("prfChecklistItem").style.display = show
    ? "list-item"
    : "none";
}

function getLastCheckedLabel(data) {
  const labels = [
    "GSR",
    "PRF",
    "Agubalaa",
    "Agubalaa - V1",
    "Agubalaa - V2",
    "Agubalaa - V3",
    "QR",
    "QR - V1",
    "QR - V2",
    "QR - V3",
    "PO",
    "Delivery Note",
    "Invoice",
    "Sent to Payment",
  ];

  for (let i = data.checklist.length - 1; i >= 0; i--) {
    if (data.checklist[i]) return labels[i] || "";
  }

  return "";
}

function saveCoverSheet() {
  const data = {
    sheetId: document.getElementById("sheetId").value || `PROC-${Date.now()}`,
    gsrRef: document.getElementById("gsrRef").value,
    prfRef: document.getElementById("prfRef").value,
    item: document.getElementById("item").value,
    vendor: document.getElementById("vendor").value,
    poNo: document.getElementById("poNo").value,
    remarks: document.getElementById("remarks").value.trim(),
    type: document.querySelector('input[name="type"]:checked')?.value,
    agubalaaChecked: document.getElementById("agubalaaBox").checked,
    qrChecked: document.getElementById("qrBox").checked,
    checklist: Array.from(
      document.querySelectorAll('.section ol input[type="checkbox"]')
    ).map((input) => input.checked),
  };

  const key = data.sheetId;
  document.getElementById("sheetId").value = key;

  localStorage.setItem(key, JSON.stringify(data));

  let index = JSON.parse(localStorage.getItem("coverSheetIndex") || "[]");
  if (!index.includes(key)) {
    index.push(key);
    localStorage.setItem("coverSheetIndex", JSON.stringify(index));
  }

  togglePOVisibility();
  refreshTable();
  alert("Cover sheet saved.");
}

function loadCoverSheet(refNo) {
  const data = JSON.parse(localStorage.getItem(refNo));
  if (!data) return alert("Not found");

  const status = getLastCheckedLabel(data);

  document.getElementById("sheetId").value = data.sheetId;
  document.getElementById("gsrRef").value = data.gsrRef;
  document.getElementById("prfRef").value = data.prfRef;
  document.getElementById("item").value = data.item;
  document.getElementById("vendor").value = data.vendor;
  document.getElementById("poNo").value = data.poNo;
  document.getElementById('remarks').value = data.remarks || status;  


  if (data.type) {
    document.querySelector(
      `input[name="type"][value="${data.type}"]`
    ).checked = true;
    togglePRF(data.type === "goods");
  }

  document.getElementById("agubalaaBox").checked = data.agubalaaChecked;
  document.getElementById("qrBox").checked = data.qrChecked;
  toggleVendorLists();
  
  const checkboxes = document.querySelectorAll(
    '.section ol input[type="checkbox"]'
  );
  data.checklist.forEach((checked, i) => {
    if (checkboxes[i]) checkboxes[i].checked = checked;
  });

  togglePOVisibility();
}

function togglePOVisibility() {
  const poCheckbox = Array.from(
    document.querySelectorAll('.section ol input[type="checkbox"]')
  ).find((label) => label.parentElement.textContent.includes("PO"));

  const showPO = poCheckbox?.checked;

  document.getElementById("vendor").parentElement.style.display = showPO
    ? "block"
    : "none";
  document.getElementById("poNo").parentElement.style.display = showPO
    ? "block"
    : "none";
}

function refreshTable() {
  const tableBody = document.querySelector("#savedTable tbody");
  tableBody.innerHTML = "";
  const keys = JSON.parse(localStorage.getItem("coverSheetIndex") || "[]");

  keys.forEach((id) => {
    const data = JSON.parse(localStorage.getItem(id));

    const status = getLastCheckedLabel(data);
    const summary = (data.item || "").split("\n")[0]?.substring(0, 50) || "";
    const remarksText = data.remarks || status || "No remarks";
    const row = document.createElement("tr");
    row.className = "clickable";
    row.onclick = () => loadCoverSheet(id);
    row.innerHTML = `
      <td>${id}</td>
      <td>${summary}</td>
      <td>${remarksText}</td>
      <td>${data.poNo || ""}</td>
      <td>${data.vendor || ""}</td>
    `;

    tableBody.appendChild(row);
  });
}

window.onload = function () {
  refreshTable();

  document
    .querySelectorAll('.section ol input[type="checkbox"]')
    .forEach((checkbox, i) => {
      checkbox.addEventListener("change", () => {
        const currentId = document.getElementById("sheetId").value;
        if (!currentId) return;


        const data = JSON.parse(localStorage.getItem(currentId));
        if (!data) return;

        data.checklist[i] = checkbox.checked;
        localStorage.setItem(currentId, JSON.stringify(data));

        const status = getLastCheckedLabel(data);
        document.getElementById("remarks").value = [status, data.remarks].filter(Boolean).join(' | ');

        refreshTable();
        togglePOVisibility(); // also update PO/Vendor visibility
      });
    });
};

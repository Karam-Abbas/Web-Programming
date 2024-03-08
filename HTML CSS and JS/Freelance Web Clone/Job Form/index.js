function viewApplications() {
  document.getElementById("tableContainer").style.display = "block";
  const table = document.getElementById("applicationsTable");
  let tableHTML =
    "<thead><tr><th>Field</th><th>Value</th></tr></thead><tbody>";

  // Retrieve form submissions from local storage
  const storedSubmissions = JSON.parse(localStorage.getItem("submissions")) || [];
  storedSubmissions.forEach((formData, index) => {
    tableHTML += `<tr><td><strong>Application ${index + 1}</strong></td><td></td></tr>`;
    Object.entries(formData).forEach(([field, value]) => {
      tableHTML += `<tr><td>${field}</td><td>${value}</td></tr>`;
    });
  });

  tableHTML += "</tbody>";
  table.innerHTML = tableHTML;
}


function logFormData(event) {
  event.preventDefault();
  const form = document.getElementById("jobApplicationForm");
  const formData = {};
  for (let i = 0; i < form.elements.length; i++) {
    const element = form.elements[i];
    if (element.type !== "submit") {
      formData[element.name] = element.value;
    }
  }
  console.log("Form Data:", formData);

  // Retrieve existing form submissions from Local Storage
  const storedSubmissions = JSON.parse(localStorage.getItem("submissions")) || [];
  storedSubmissions.push(formData);
  localStorage.setItem("submissions", JSON.stringify(storedSubmissions));
}

document.getElementById("jobApplicationForm").addEventListener("submit", logFormData);

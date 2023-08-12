function populateSummaryTable() {
  const userInputs = JSON.parse(localStorage.getItem("userInputs"));

  if (userInputs) {
    document.getElementById("C-date").textContent = userInputs.date;
    document.getElementById("C-time").textContent = userInputs.time;
    document.getElementById("C-period").textContent = userInputs.period;
    document.getElementById("C-SLA").textContent = userInputs.sla;
    document.getElementById("C-SLC").textContent = userInputs.slc;
    document.getElementById("C-FA").textContent = userInputs.fa;
    document.getElementById("C-FC").textContent = userInputs.fc;
    document.getElementById("C-I").textContent = userInputs.i;
    document.getElementById("C-tot").textContent = userInputs.total + "USD";
    document.getElementById("C-charges1").textContent = userInputs.charges1;
    document.getElementById("C-charges2").textContent = userInputs.charges2;
    document.getElementById("C-charges3").textContent = userInputs.charges3;
    document.getElementById("C-charges4").textContent = userInputs.charges4;
    document.getElementById("C-charges5").textContent = userInputs.charges5;
  }

  if (userInputs) {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    document.getElementById("C-Name").textContent = userDetails.name;
    document.getElementById("C-mobile").textContent = userDetails.mobile;
    document.getElementById("C-email").textContent = userDetails.email;
  }
}

// Call the function when the confirmation page loads
populateSummaryTable();

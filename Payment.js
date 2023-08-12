
function validateForm() {
  var cardNumber = document.getElementById("cardnumber").value;
  var expiryDate = document.getElementById("expirenumber").value.trim();
  var cvcCvv = document.getElementById("Visanumber").value;
  var nameOnCard = document.getElementById("name").value;


  if (!/^\d{16}$/.test(cardNumber)) {
      alert("Please enter a valid 16-digit card number.");
      return false;
  }

  if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
    alert("Please enter a valid expiry date in the format MM/YY.");
    return false;
}



  if (!/^\d{3}$/.test(cvcCvv)) {
      alert("Please enter a valid 3-digit CVC/CVV number.");
      return false;
  }


  if (!/^[A-Za-z\s]+$/.test(nameOnCard.trim())) {
      alert("Please enter a valid name on card with alphabetic characters only.");
      return false;
  }

  return true;
}


function populateSummaryTable() {
  const userInputs = JSON.parse(localStorage.getItem("userInputs"));

  if (userInputs) {
    document.getElementById("P-total").textContent="$"+userInputs.total;
    document.getElementById("P-date").textContent = userInputs.date; 
    document.getElementById("P-time").textContent=userInputs.time;
    document.getElementById("P-period").textContent=userInputs.period;
    document.getElementById("P-SLA").textContent=userInputs.sla;
    document.getElementById("P-SLC").textContent=userInputs.slc;
    document.getElementById("P-FA").textContent=userInputs.fa;
    document.getElementById("P-FC").textContent=userInputs.fc;
    document.getElementById("P-I").textContent=userInputs.i;
    document.getElementById("P-tot").textContent=userInputs.total;
    document.getElementById("P-charges1").textContent=userInputs.charges1;
    document.getElementById("P-charges2").textContent=userInputs.charges2;
    document.getElementById("P-charges3").textContent=userInputs.charges3;
    document.getElementById("P-charges4").textContent=userInputs.charges4;
    document.getElementById("P-charges5").textContent=userInputs.charges5;
  }
}

populateSummaryTable();
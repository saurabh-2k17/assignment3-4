function convertCurrency() {
    var cadInput = document.getElementById("cadInput").value;
    var usdInput = document.getElementById("usdInput").value;
    var error = document.getElementById("error");
    
    // Validation for no input.
    if (cadInput === "" && usdInput === "") {
      error.textContent = "Please enter a value in CAD or USD field.";
      return;
    }
    // Validation for both input.
    if (cadInput !== "" && usdInput !== "") {
      error.textContent = "Please enter a value in either CAD or USD field, not both.";
      return;
    }
    
    if (cadInput !== "") {
      if (isNaN(cadInput) || parseFloat(cadInput) < 0) {
        error.textContent = "Please enter a valid CAD amount.";
        return;
      }
      
      // CAD to USD Conversion.
      var rate = 0.8;
      var usdAmount = parseFloat(cadInput) * rate;
      
      document.getElementById("usdInput").value = usdAmount.toFixed(3);
      error.textContent = "";
    } else if (usdInput !== "") {
      if (isNaN(usdInput) || parseFloat(usdInput) < 0) {
        error.textContent = "Please enter a valid USD amount.";
        return;
      }
      // USD to CAD conversion.
      var rate = 1.25;
      var cadAmount = parseFloat(usdInput) * rate;
      
      document.getElementById("cadInput").value = cadAmount.toFixed(3);
      error.textContent = "";
    }
  }
  
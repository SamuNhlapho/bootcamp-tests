function transportFee (shift) {
    switch(shift) {
      case "morning":
        return "R20";
        break;
      case "afternoon":
        return "R10";
        break;
      case "nightshift":
        return "free";
        break;
      default:
        return "The price is   " + shift;
              }
  }
  
  console.log(transportFee("morning"));
  
  console.log(transportFee("nightshift"));
  
  console.log(transportFee("midday"));
  
  assert.equal(transportFee('morning'), 'R20');
  
  assert.equal(transportFee('afternoon'), 'R10');
  
  assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
  
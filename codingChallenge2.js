function calculateTip(bill) {
    if (bill >= 50 && bill <= 300) {
      return bill * 0.15;
    } else {
      return bill * 0.2;
    }
  }
  console.log("Tip for $100 bill:", calculateTip(100));
  
  const bills = [50, 100, 200, 350];
  const tips = [];
  const totals = [];
  
  for (let i = 0; i < bills.length; i++) {
    const tip = calculateTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
  }
  
  console.log("Bills:", bills);
  console.log("Tips:", tips);
  console.log("Totals:", totals);
  
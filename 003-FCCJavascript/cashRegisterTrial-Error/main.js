function checkCashRegister(price, cash) {
  let result = { status: "", change: [] };

  let change = cash - price;
  let baseChange = change;
  let currencyUnit = [
    [
      ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["QUARTER", 0.25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100],
    ],
  ];
  let givenCid = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ];
  console.log(givenCid[0][1]);
  return givenCid[0].length, currencyUnit[0].length;
}

console.log(checkCashRegister(2, 3));

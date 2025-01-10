function checkCashRegister(price, cash, cid) {
  let result = { status: "", change: [] };
  let totalCID = 0;
  let change = cash - price;
  console.log(`change: ${change}`);
  let isFlag = false;
  for (let i = cid.length - 1; i >= 0; i--) {
    let [name, value] = cid[i];

    if (value === 0) {
      console.log("empty");
    } else {
      console.log(value);
    }
  }
  return result;

  // within loop of loop
  // check if the final compute loop value is equal to change return the object right  away
}

let currencyUnit = [
  ["ONE HUNDRED", 100],
  ["TWENTY", 20],
  ["TEN", 10],
  ["FIVE", 5],
  ["ONE", 1],
  ["QUARTER", 0.25],
  ["DIME", 0.1],
  ["NICKEL", 0.05],
  ["PENNY", 0.01],
];

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);

/*
first output
  let change = cash - price;
  cid.forEach(([, value]) => {
    change -= value;
    console.log(change);
  });
  if (0 > change || change != 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

*/

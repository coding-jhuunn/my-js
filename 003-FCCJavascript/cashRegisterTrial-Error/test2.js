function checkCashRegister(price, cash, cid) {
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

  for (let i = 0; i < currencyUnit.length; i++) {
    let [name, value] = currencyUnit[i];
    let isFlag = true;
    console.log(value);
    if (value === 0) {
      result.change.unshift([name, value]);
    }
    while (isFlag) {
      if (change > value) {
        change -= value;
        result.change.unshift([name, value]);
        isFlag = true;
      } else {
        isFlag = false;
      }
    }
  }

  //error
  // un lang laman ng cid dapat ung given na cid sa argu not the example

  //   for (let i = cid.length - 1; i >= 0; i--) {
  //     let [name, value] = cid[i];
  //     let isFlag = true;
  //     console.log(value);
  //     // while (isFlag) {
  //     //   if (change >= value) {
  //     //     change -= value;
  //     //     result.change.unshift([name, value]);
  //     //     isFlag = true;
  //     //   } else {
  //     //     isFlag = false;
  //     //   }
  //     // }
  //   }
  let checkChange = 0;
  result.change.forEach(([, value]) => {
    checkChange += value;
  });
  console.log("///");
  console.log(baseChange, checkChange);
  console.log("///");

  return result;
}
console.log("test0");
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
console.log("test1");
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
console.log("test2");
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
console.log("test3");
console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

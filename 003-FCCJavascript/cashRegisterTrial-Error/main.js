function checkCashRegister(price, cash, cid) {
  let result = { status: "", change: [] };

  let change = cash - price;
  let baseChange = change;
  let currencyUnit = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100],
  ];
  let totalCid = 0;
  cid.forEach(([, value]) => {
    totalCid += value;
  });

  if (change > totalCid) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }

  for (let i = cid.length - 1; i >= 0; i--) {
    let [name, value] = cid[i];
    let [name2, value2] = currencyUnit[i];
    console.log(value, value2);

    let isFlag = true;
    let isAddFlag = false;
    let newValue = 0;
    while (isFlag) {
      console.log(
        `change :${change} & indexCID ${name} :${value} currencyRate ${value2}`
      );
      console.log(result);
      if (change >= value) {
        if (value > 0) {
          change = change - value2;
          value -= value2;
          newValue += value2;
          console.log(`newValue: ${newValue}`);
          isFlag = true;
          isAddFlag = true;
        } else {
          console.log("push");
          result.change.unshift([name, newValue]);
          isFlag = false;
        }
        change = change - value2;
        newValue += value2;
        console.log(`newValue: ${newValue}`);
        isFlag = true;
        isAddFlag = true;
      } else {
        if (isAddFlag) {
          console.log("push");
          result.change.unshift([name, newValue]);
        }
        isFlag = false;
      }
    }
  }
  let checkChange = 0;
  result.change.forEach(([, value]) => {
    checkChange += value;
  });
  if (checkChange > 0) {
    result.status = "OPEN";
  } else if (checkChange < 0) {
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
  }
  // checkChange = Math.round(checkChange * 100) / 100;
  console.log("///");
  console.log(baseChange, checkChange);
  console.log("///");
  return result;
}

console.log("test1");
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
console.log("test2");
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

console.log("test3");
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
console.log("test4");

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
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
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

function checkCashRegister(price, cash, cid) {
  let result = { status: "", change: [] };
  let cashINDrawer = cid;
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

  let customerChange = cash - price;

  if (customerChange > totalCid) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }
  for (let i = cashINDrawer.length - 1; i >= 0; i--) {
    let [nameCID, valueCID] = cashINDrawer[i];
    let [currencyName, valueCurrency] = currencyUnit[i];

    let isFlag = true;
    let baseCIDValue = 0;

    while (isFlag) {
      if (customerChange >= valueCurrency) {
        if (valueCID == 0) {
          console.log("skip");
          isFlag = false;
          result.change.unshift([currencyName, baseCIDValue]);
          break;
        }
        console.log("perform");

        customerChange -= valueCurrency;
        valueCID -= valueCurrency;

        customerChange = Math.round(customerChange * 100) / 100;
        valueCID = Math.round(valueCID * 100) / 100;
        baseCIDValue = Math.round(baseCIDValue * 100) / 100;
      }
      if (valueCID === 0 || valueCurrency > customerChange) {
        isFlag = false;
        result.change.unshift([currencyName, baseCIDValue]);
      }
      console.log(
        `customerChange: ${customerChange},  cashier:[${nameCID}:${valueCID}]            currency:[${currencyName}:${valueCurrency}]`
      );
    }
  }
  let baseChange = 0;
  cashINDrawer.forEach(([, value]) => {
    baseChange += value;
  });
  console.log(`CID: ${baseChange}}`);
  if (baseChange > 0) {
    result.status = "OPEN";
  }
  if (0 != customerChange) {
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
    return result;
  }
  if (customerChange === 0) {
    result.status = "CLOSED";
  }

  console.log(customerChange);
  console.log("*********************************************************");
  return result;
}

console.log(
  "---------------------------------------test1---------------------------------------"
);
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
console.log(
  "NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN"
);
console.log(
  "---------------------------------------test2---------------------------------------"
);
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

console.log(
  "---------------------------------------test3---------------------------------------"
);
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
  "---------------------------------------test4---------------------------------------"
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
console.log(
  "---------------------------------------test5---------------------------------------"
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

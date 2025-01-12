function checkCashRegister(price, cash, cid) {
  function roundedUP(num) {
    return Math.round(num * 100) / 100;
  }

  let result = { status: "", change: [] };
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
  for (let i = cid.length - 1; i >= 0; i--) {
    let [nameCID, valueCID] = cid[i];
    let [currencyName, valueCurrency] = currencyUnit[i];

    let isFlag = true;
    let baseCIDValue = 0;

    while (isFlag) {
      if (customerChange >= valueCurrency && valueCID != 0) {
        console.log("perform");

        customerChange -= valueCurrency;
        valueCID -= valueCurrency;
        baseCIDValue += valueCurrency;

        customerChange = roundedUP(customerChange);
        valueCID = roundedUP(valueCID);
        baseCIDValue = roundedUP(baseCIDValue);
      }
      if (valueCID === 0 || valueCurrency > customerChange) {
        isFlag = false;
        result.change.push([currencyName, baseCIDValue]);
      }
      console.log(
        `customerChange: ${customerChange},  cashier:[${nameCID}:${valueCID}]            currency:[${currencyName}:${valueCurrency}]`
      );
    }
  }

  // problems
  // test 5 if the status is CLOSED return all CID
  // test 3 // not enough fund but still perform the loop it should be return
  // test 2 the status is okay but remvoe the index if the vaue is 0 in CID
  // test 1 like test 2

  // let baseChange = 0;
  // cid.forEach(([, value]) => {
  //   baseChange += value;
  // });
  // console.log(`CID: ${baseChange}}`);
  // if (baseChange > 0) {
  //   result.status = "OPEN";
  // }
  // if (0 != customerChange) {
  //   result.status = "INSUFFICIENT_FUNDS";
  //   result.change = [];
  //   return result;
  // }
  // if (customerChange === 0) {
  //   result.status = "CLOSED";
  // }

  console.log(customerChange);
  console.log("*********************************************************");
  return result;
}
console.log(
  "NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN"
);

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

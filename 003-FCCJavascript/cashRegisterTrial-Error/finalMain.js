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
  console.log(`total cash in drawer : ${totalCid}`);
  for (let i = cid.length - 1; i >= 0; i--) {
    let [nameCID, valueCID] = cid[i];
    let [currencyName, valueCurrency] = currencyUnit[i];

    let isFlag = true;
    let baseCIDValue = 0;

    if (valueCID === 0) {
      result.change.push([currencyName, baseCIDValue]);
      isFlag = false;
    }

    while (isFlag) {
      if (customerChange >= valueCurrency) {
        console.log("perform");
        console.log(
          `customerChange: ${customerChange},  cashier:[${nameCID}:${valueCID}]            currency:[${currencyName}:${valueCurrency} baseCIDValue: ${baseCIDValue}] totalCID :${totalCid}`
        );
        customerChange -= valueCurrency;

        valueCID -= valueCurrency;
        baseCIDValue += valueCurrency;

        customerChange = roundedUP(customerChange);
        valueCID = roundedUP(valueCID);
        baseCIDValue = roundedUP(baseCIDValue);

        if (totalCid >= valueCurrency) {
          totalCid -= valueCurrency;
          totalCid = roundedUP(totalCid);
        }
      }
      if (valueCID === 0 || valueCurrency > customerChange) {
        isFlag = false;
        console.log("done");
        console.log(
          `customerChange: ${customerChange},  cashier:[${nameCID}:${valueCID}]            currency:[${currencyName}:${valueCurrency} baseCIDValue: ${baseCIDValue}] totalCID :${totalCid}`
        );
        result.change.push([currencyName, baseCIDValue]);
      }
    }
    console.log(customerChange);
  }
  console.log(`total cash in drawer : ${totalCid}`);
  if (customerChange == 0 && totalCid != 0) {
    result.status = "OPEN";
  } else if (customerChange == 0 && totalCid == 0) {
    result.status = "CLOSED";
  } else if (
    (customerChange != 0 && totalCid == 0) ||
    (customerChange != 0 && totalCid != 0)
  ) {
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
  }
  console.log(result.change);
  if (result.status == "OPEN") {
    let emptyResult = [];
    for (let i = 0; i < result.change.length; i++) {
      let [key, value] = result.change[i];
      if (value > 0) {
        emptyResult.push([key, value]);
      }
    }
    console.log(emptyResult);
    result.change = emptyResult;
  } else if (result.status == "CLOSED") {
    let emptyResult = [];
    for (let i = 0; i < result.change.length; i++) {
      let [key, value] = result.change[i];
      if (value > 0) {
        emptyResult.push([key, value]);
      }
    }
  }

  return result;
}
console.log("********************* NEW TEST *********************");

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
// console.log(
//   "---------------------------------------test2---------------------------------------"
// );
// console.log(
//   checkCashRegister(3.26, 100, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100],
//   ])
// );

// console.log(
//   "---------------------------------------test3---------------------------------------"
// );
// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 1],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
//   ])
// );
// console.log(
//   "---------------------------------------test4---------------------------------------"
// );

// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
//   ])
// );
// console.log(
//   "---------------------------------------test5---------------------------------------"
// );

// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 0.5],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
//   ])
// );

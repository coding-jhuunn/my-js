function checkCashRegister(price, cash, cid) {
  let totalCID = 0;

  cid.forEach(([, value]) => {
    totalCID += value;
  });

  let change = cash - price;
  console.log(change, totalCID);
}
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
console.log("///");
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
console.log("///");

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

/*
price - first argument accepts purchase price
cash - second argument as payment
cid - is a 2d array argument as cash in drawer

expected output

return {status: "INSUFFICIENT_FUNDS", change: []}
    if CID is less than the change due or you can't return the extract change

return {status: "CLOSED", change: [...]}
    if the total CID is equal to change due

return {status: "OPEN", change: [...]}
    the change due in coins and bills sorted to highest to lowest order as the value of the change key

*/

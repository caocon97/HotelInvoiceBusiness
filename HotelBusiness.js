// import * as fs from "./node_modules/browserify-fs";
// var fs = require("browserify-fs");
function ready() {
  let MoneyCalBtn = document.getElementById("MoneyCal");
  MoneyCalBtn.addEventListener("click", function () {
    let namespace = "hotel-business";
    let roomFeeEle = document.getElementById("roomFee");
    let paidAmountEle = document.getElementById("paidAmount");
    let totalEle = document.getElementById("total");
    let remainingAmountEle = document.getElementById("remainingAmount");
    let taxRateEle = document.getElementById("taxRate");
    let additionalFeeEle = document.getElementById("additionalFee");
    let isInvoceEle = document.getElementById("isInvoce");

    let roomFee = roomFeeEle.value;
    let paidAmount = paidAmountEle.value;
    let total = totalEle.value;
    let remainingAmount = remainingAmountEle.value;
    let taxRate = taxRateEle.value;
    let additionalFee = additionalFeeEle.value;
    let isInvoce = isInvoceEle.checked;

    console.log(
      `${isInvoce} ${roomFee} ${paidAmount} ${total} ${remainingAmount} ${taxRate} ${additionalFee}`
    );
    if (isInvoce) {
      let taxRateInPecent = taxRate / 100;
      let extraFee = roomFee * taxRateInPecent;
      total = parseInt(extraFee) + parseInt(roomFee) + parseInt(additionalFee);
      remainingAmount = total - paidAmount;
      totalEle.value = total;
      remainingAmountEle.value = remainingAmount;
    } else {
      total = parseInt(roomFee) + parseInt(additionalFee);
      remainingAmount = total - paidAmount;
      totalEle.value = total;
      remainingAmountEle.value = remainingAmount;
    }
  });
}
document.addEventListener("DOMContentLoaded", ready);

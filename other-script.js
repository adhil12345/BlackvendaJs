// star ratings
let classReviewTo = "revDiv";
let str5 = "starRating-5";
let str4 = "starRating-4";
let str3 = "starRating-3";
let str2 = "starRating-2";
let str1 = "starRating-1";

let countTotal = document.getElementsByClassName(classReviewTo).length;
let count5 = document.getElementsByClassName(str5).length;
let count4 = document.getElementsByClassName(str4).length;
let count3 = document.getElementsByClassName(str3).length;
let count2 = document.getElementsByClassName(str2).length;
let count1 = document.getElementsByClassName(str1).length;

document.querySelectorAll(".totalCountReview")[0].innerHTML =(`${countTotal}`);
document.querySelectorAll(".fiveStarRating")[0].innerHTML =(`${count5}`);
document.querySelectorAll(".fourStar")[0].innerHTML =(`${count4}`);
document.querySelectorAll(".threeStar")[0].innerHTML =(`${count3}`);
document.querySelectorAll(".toWStar")[0].innerHTML =(`${count2}`);
document.querySelectorAll(".oneStar")[0].innerHTML =(`${count1}`);

var maxCount = 100;

var strRfive = document.querySelectorAll(".fiveStarRating")[0].innerHTML;
var strRFour = document.querySelectorAll(".fourStar")[0].innerHTML;
var strRThree = document.querySelectorAll(".threeStar")[0].innerHTML;
var strRTow = document.querySelectorAll(".toWStar")[0].innerHTML;
var strROne = document.querySelectorAll(".oneStar")[0].innerHTML;

var countBar5 = strRfive;
var countBar4 = strRFour;
var countBar3 = strRThree;
var countBar2 = strRTow;
var countBar1 = strROne;

var percentage5 = (countBar5 / maxCount) * 100;
var percentage4 = (countBar4 / maxCount) * 100;
var percentage3 = (countBar3 / maxCount) * 100;
var percentage2 = (countBar2 / maxCount) * 100;
var percentage1 = (countBar1 / maxCount) * 100;

document.querySelectorAll(".bar-5")[0].style.width = percentage5 + "%";
document.querySelectorAll(".bar-4")[0].style.width = percentage4 + "%";
document.querySelectorAll(".bar-3")[0].style.width = percentage3 + "%";
document.querySelectorAll(".bar-2")[0].style.width = percentage2 + "%";
document.querySelectorAll(".bar-1")[0].style.width = percentage1 + "%";

// login page script 
function userLogi(){window.location="https://www.blackvenda.lk/p/blog-page_22.html";}var customerName=document.getElementById("customer-name").textContent;if("admin"===customerName){$("#customer-name").click(function(e){window.location="https://www.blackvenda.lk/p/add-products.html"});}else{$("#customer-name").click(function(e){window.location="https://www.blackvenda.lk/p/blog-page_23.html"});}

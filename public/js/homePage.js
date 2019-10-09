$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "/api/orders",

    success: handleData
  })
});
function handleData (data) {
  console.log("data: ", data);
  var basket = []
  for (i = 0; i < data.length; i++) {
    var varietal = data[i].varietal;
    var ordered = data[i].actualOrdered;
    var yearOrdered = data[i].createdAt.split("T")[0].split("-")[0];
    // console.log("year ordered: ", yearOrdered);
    sortAndDisplay(varietal, ordered, yearOrdered);
  }
  basket.push(sbSum, chardSum, pinotSum, zinSum, rbSum, merSum, cabSum);
  console.log("basket: ", basket);
  postData(basket)
}

var basket=[];
function sortAndDisplay(varietal, ordered, yearOrdered) {

  if ((yearOrdered = "2019")) {
    wineOrder(varietal, ordered);
  } else {
    console.log("time to add a new year!");
  }
}

function wineOrder(varietal, ordered) {

  var varietal;
  var ordered;
  // console.log("ordered type: ", typeof ordered);
  switch (varietal) {
    case "Sauvignon Blanc":
      sbArr.push(ordered);
      sb(sbArr);
      console.log("sb sum type:", typeof ordered);
      break;
    case "Chardonnay":
      chardArr.push(ordered);
      chard(chardArr);
      break;
    case "Pinot Noir":
      pinotArr.push(ordered);
      pinot(pinotArr);
      break;
    case "Zinfandel":
      zinArr.push(ordered);
      zin(zinArr);
    case "Red Blend":
      rbArr.push(ordered);
      redBlend(rbArr);
      break;
    case "Merlot":
      merArr.push(ordered);
      merlot(merArr);
      break;
    case "Cabernet":
      cabArr.push(ordered);
      cab(cabArr);
      break;
  }
  // console.log("varietal: ", varietal);
  return varietal;
}

//these arrays are a collecting point for all sales... will be used as the y: value


// console.log("basket type: ", typeof basket);
var sbArr = [];
var sbSum = 0;
function sb(data) {
  for (var i = 0; i < data.length; i++) {
    var saleVol = data[i];
  }
  sbSum += saleVol;
}

var chardArr = [];
var chardSum = 0;

function chard(data) {
  for (var i = 0; i < data.length; i++) {
    var saleVol = data[i];
  }
  chardSum += saleVol;
}

var pinotArr = [];
var pinotSum = 0;

function pinot(data) {
  for (var i = 0; i < data.length; i++) {
    var saleVol = data[i];
  }
  pinotSum += saleVol;
}

var zinArr = [];
var zinSum = 0;

function zin(data) {
  for (var i = 0; i < data.length; i++) {
    var saleVol = data[i];
  }
  zinSum += saleVol;
}

var rbArr = [];
var rbSum = 0;

function redBlend(data) {
  for (var i = 0; i < data.length; i++) {
    var saleVol = data[i];
  }
  rbSum += saleVol;
}

var merArr = [];
var merSum = 0;

function merlot(data) {
  for (var i = 0; i < data.length; i++) {
    var saleVol = data[i];
  }
  merSum += saleVol;
}

var cabArr = [];
var cabSum = 0;

function cab(data) {
  for (var i = 0; i < data.length; i++) {
    var saleVol = data[i];
  }
  cabSum += saleVol;
}

//wineVolArr is a final array collecting the sum value of each varietal's total sales. will be sent as the y: value

zebra = [19, 2, 22, 14, 16, 19, 15];
console.log("Zebra: ", zebra);
function postData(basket){
  var totalSales2019 = {
    x: [
      "Sauvignon Blanc",
      "Chardonnay",
      "Pinot Noir",
      "Zinfandel",
      "Red Blend",
      "Merlot",
      "Cabernet"
    ],
    y: basket,
    type: "bar",
    name: "Cabernet",
    marker: {
      color: "rgb(0,255,0)",
      opacity: 0.5
    }
  };
  
  var data = [totalSales2019];
  
  var layout = {
    title: "Yearly Sales by Varietal",
    xaxis: {
      tickangle: -45
    },
    barmode: "group"
  };
  
  Plotly.newPlot("myDiv", data, layout);

}

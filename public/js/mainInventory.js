$(document).ready(function () {
  // populates the table on load
  mainInventory();

  // //populates the customer dropdown -- code on mainInventory.hbs is also commented out.
  // $.ajax({
  //   type: 'GET',
  //   url: 'http://localhost:3000/api/orders',

  //   success: function (data) {
  //     for (i = 0; i < data.length; i++) {
  //       var custName = data[i].accountName;
  //       var dropOption = "<option id=" + custName + ">" + custName + "</option>";

  //       $("#customerNames").append(dropOption)
  //     }

  //   }
  // });
  //____________________________________________




})


//add a additional boxes to inventory
$("#additionalBoxes").on("click", function (event) {
  event.preventDefault();
  var boxType = $("select").find(':selected').data('name');
  var boxToString = boxType.toString()
  var boxQuantity = $("#boxQuantity").val();
  var parseQuant = parseInt(boxQuantity)
  console.log(typeof boxType);
  console.log("box Type: ", boxType)
  console.log("box quantity: ", boxQuantity)


  var boxInfo = {
    "boxType": boxToString,
    "onHand": parseQuant
  }
  $.ajax({
    type: 'PUT',
    url: 'http://localhost:3000/api/boxes',
    data: boxInfo,
    success: function (data) {
      console.log("You've successfully added a wine")
      $("#addNewBoxes").val("");
      $("#boxQuantity").val("");

    }

  });

});
//____________________________________________


//add a new client
$("#addNewWine").on("click", function (event) {
  event.preventDefault();
  var newVintage = $("#newVintage").val();
  var newVarietal = $("#newVarietal").val();
  var currentInventory = $("#currentInventory").val();
  var shadowInventory = $("#shadowInventory").val();
  var boxType = $("#boxType").val();
  console.log("box Type: ", boxType)

  var newWineInfo = {
    "vintage": newVintage,
    "varietal": newVarietal,
    "actualInventory": currentInventory,
    "shadowInventory": shadowInventory,
    "boxType": boxType
  }
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/newWine',
    data: newWineInfo,
    success: function (data) {
      console.log("You've successfully added a wine")
      $("#newVintage").val("");
      $("#newVarietal").val("");
      $("#currentInventory").val("");
      $("#shadowInventory").val("");
      $("#boxType").val("");
    }

  });

});
//____________________________________________

// auto displays main inventory... set in function so we can override?
function mainInventory() {

  $.ajax({
    type: 'GET',
    url: "http://localhost:3000/api/maininventory",
    success: function (data) {
      $("#mainInventoryTable").empty();
      for (let i = 0; i < data.length; i++) {
        var itemID = (data[i].id)
        var vintage = (data[i].vintage)
        var varietal = (data[i].varietal)
        var actualInventory = (data[i].actualInventory)
        var shadowInventory = (data[i].shadowInventory)
        var boxType = (data[i].boxType)

        var tr = $("<tr>")
        var th = $("<th scope='row'></th>")
        var wHouse = $("<td>Warehouse</td>")
        var ordered = $("<td> -- </td>")
        var vint = $("<td>" + vintage + "</td>")
        var kind = $("<td>" + varietal + "</td>")
        var actual = $("<td>" + actualInventory + "</td>")
        var shadow = $("<td>" + shadowInventory + "</td>")
        var boxtype = $("<td>" + boxType + "</td>")

        vint.attr("data-id", itemID);
        kind.attr("data-id", itemID);
        actual.attr("data-id", itemID);
        shadow.attr("data-id", itemID);
        boxtype.attr("data-id", itemID);


        tr.append(wHouse, vint, kind, actual, shadow, ordered, boxtype)

        $("#mainInventoryTable").append(tr)
      }
    }

  })
}
//____________________________________________

//grabbing all info for a specific wine that is chosen from dropdown menu.
$("#wineVarietal").change(function () {
  var varietalType = $("select.custom-select.wine").find(':selected').data('name');
  console.log("Varietal selected: ", varietalType)

  if (varietalType === "allWarehouse") {
    mainInventory()
  } else {
    individualWines()
  };

  //call and get specific wine from warehouse : populate table
  function individualWines() {

    $.ajax({
      type: 'GET',
      url: "http://localhost:3000/api/oneVarietal/" + varietalType + "",
      success: function (data) {
        console.log("You are getting the info back")
        $("#mainInventoryTable").empty();
        for (let i = 0; i < data.length; i++) {
          var itemID = (data[i].id)
          var vintage = (data[i].vintage)
          console.log("vintage: ", vintage)
          var varietal = (data[i].varietal)
          var actualInventory = (data[i].actualInventory)
          var shadowInventory = (data[i].shadowInventory)
          var boxType = (data[i].boxType)

          var tr = $("<tr>")
          var th = $("<th scope='row'></th>")
          var ordered = $("<td> -- </td>")
          var wHouse = $("<td>Warehouse</td>")
          var vint = $("<td>" + vintage + "</td>")
          var kind = $("<td>" + varietal + "</td>")
          var actual = $("<td>" + actualInventory + "</td>")
          var shadow = $("<td>" + shadowInventory + "</td>")
          var boxtype = $("<td>" + boxType + "</td>")

          vint.attr("data-id", itemID);
          kind.attr("data-id", itemID);
          actual.attr("data-id", itemID);
          shadow.attr("data-id", itemID);
          boxtype.attr("data-id", itemID);

          tr.append(wHouse, vint, kind, actual, shadow, ordered, boxtype)

          $("#mainInventoryTable").append(tr)
        }

      }

    })
    //call and get specific wine from each customer: populate table
    $.ajax({
      type: 'GET',
      url: "http://localhost:3000/api/orders/" + varietalType + "",
      success: function (data) {
        console.log("You are getting the customer info back")
        console.log("custom data: ", data)

        for (let i = 0; i < data.length; i++) {
          var itemID = (data[i].id)
          var labelName = (data[i].accountName)
          console.log("labelName: ", labelName)
          var vintage = (data[i].vintage)
          var varietal = (data[i].varietal)
          var actualInventory = (data[i].actualOrdered)
          var shadowInventory = (data[i].promised)
          var boxType = (data[i].boxType)

          var tr = $("<tr>")
          var th = $("<th scope='row'></th>")
          var wHouse = $("<td>Warehouse</td>")
          var ordered = $("<td> -- </td>")
          var labName = $("<td>" + labelName + "</td>")
          var vint = $("<td>" + vintage + "</td>")
          var kind = $("<td>" + varietal + "</td>")
          var actual = $("<td>" + actualInventory + "</td>")
          var shadow = $("<td>" + shadowInventory + "</td>")
          var boxtype = $("<td>" + boxType + "</td>")

          vint.attr("data-id", itemID);
          kind.attr("data-id", itemID);
          actual.attr("data-id", itemID);
          shadow.attr("data-id", itemID);
          boxtype.attr("data-id", itemID);

          tr.append(labName, vint, kind, actual, shadow, ordered, boxtype)

          $("#mainInventoryTable").append(tr)
        }
      }

    })
  }

});
   //____________________________________________

$(document).ready(function () {
  // populates the table on load
  mainInventory();
  boxes()
  


//populate all boxes into table

function boxes(){
  $.ajax({
    type: 'GET',
    url: "http://localhost:3000/api/boxes",
    success: function (data) {
      $("#mainBoxes").empty();
      console.log("box data: ",data);
      for (let i = 0; i < data.length; i++) {
        var tr = $("<tr>")
        var box = data[i].boxType
        var volume = data[i].onHand
        var boxes = $("<td>" + box + "</td>")
        var number = $("<td>" + volume + "</td>")
        tr.append(boxes, number)
        $("#mainBoxes").append(tr)
      }
}
 })
}



//add a additional boxes to inventory
$("#additionalBoxes").on("click", function (event) {
  event.preventDefault();
  var boxType = $("select.boxDrop").find(':selected').data('name');
  // var boxToString = boxType.toString()
  var boxQuantity = $("#boxQuantity").val();
  var parseQuant = parseInt(boxQuantity)
  console.log(typeof boxType);
  console.log("box Type: ", boxType)
  console.log("box quantity: ", boxQuantity)


  var boxInfo = {
    "boxType": boxType,
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

  }).then(function(){
    boxes()
  });

});
//____________________________________________


//add a new client
$("#addNewWine").on("click", function (event) {
  // event.preventDefault();
  var newVintage = $("#newVintage").val();
  var newVarietal = $("#newVarietal").val();
  var currentInventory = $("#currentInventory").val();
  var shadowInventory = $("#shadowInventory").val();
  var boxType = $("#boxType").val();
  if (boxType === 'Select ...') {
    alert('Need to set box type.')
    return;
  }
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
    
  }).then(function() {
    mainInventory();
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
        // var ordered = $("<td> -- </td>")
        var vint = $("<td>" + vintage + "</td>").addClass('bear')
        var kind = $("<td>" + varietal + "</td>").addClass('deer')
        var actual = $("<td>" + actualInventory + "</td>").addClass("changeValue")
        var shadow = $("<td>" + shadowInventory + "</td>")
        var boxtype = $("<td>" + boxType + "</td>")

        vint.attr("data-id", itemID);
        kind.attr("data-id", itemID);
        actual.attr("data-id", itemID);
        shadow.attr("data-id", itemID);
        boxtype.attr("data-id", itemID);


        tr.append(wHouse, vint, kind, actual, shadow, boxtype)

        $("#mainInventoryTable").append(tr)
      }
    }

  })
}
//____________________________________________
////////Change inventory number by clicking on "Current Inventory" number on mainInventory table/////////////


  //When user clicks number display modal
  $(document).on('click', '.changeValue', function(e) { 
   
    $("#addValue-modal").modal("toggle")
  
    var $target = $(e.currentTarget);
  
    var id = $target.data('id')
    console.log("id: " + $(this).data('id'))
  
    var vintage = $target.siblings()[1].innerHTML
    var varietal = $target.siblings()[2].innerHTML

    console.log(vintage + varietal)
  
    $("#addValue-modal").attr("data-selected-id", id);
    $("#addValue-modal").attr("data-selected-vintage", vintage);
    $("#addValue-modal").attr("data-selected-varietal", varietal);
  });
  
  //When user clicks "submit" on modal grab new inventory number
  $(document).on('click', '#submit-inventory', function (e) {
    var id = $("#addValue-modal").attr("data-selected-id");
    var vintage = $("#addValue-modal").attr("data-selected-vintage");
    var varietal = $("#addValue-modal").attr("data-selected-varietal");
    var newValue = $('.newValue').val()
    console.log("new: " + vintage + varietal)
  
    $("#addValue-modal").modal("toggle")
  
    var newShadow = 0;
    var inventoryUpdate = {};
  
    //Get info from "orders" table
    $.ajax({
         type: 'GET',
         url: 'http://localhost:3000/api/orders',
         success: function (data) {
           //  If wine varietal and vintage match add to the promised amount
           for (var i = 0; i < data.length; i++) {
             if (data[i].vintage === vintage && data[i].varietal === varietal) {
               newShadow += Number(data[i].promised)
             }
           }
  
           console.log("id: " + id + " newvalue: " + newValue)
           inventoryUpdate = {
             "id": id,
             //deduct promised amount from new inventory
             "shadowInventory": newValue - newShadow,
             "actualInventory": newValue
           };
  
           $.ajax({
              type: 'PUT',
              url: 'http://localhost:3000/api/maininventory',
              data: inventoryUpdate,
              success: function (data) {
                $('.newValue').val("")
                //reset table display
                mainInventory()
              }
  
           });
         }
    });
  });




//grabbing all info for a specific wine that is chosen from dropdown menu.
$("#wineVarietal").change(function () {
  var varietalType = $("select.custom-select.wine").find(':selected').data('name');
  console.log("Varietal selected: ", varietalType)

  if (varietalType === "allWarehouse") {
    mainInventory(varietalType)
  }  else {
    individualWines(varietalType)
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
          // var ordered = $("<td> -- </td>")
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

          tr.append(wHouse, vint, kind, actual, shadow, boxtype)

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
          // var ordered = $("<td> -- </td>")
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

          tr.append(labName, vint, kind, actual, shadow, boxtype)

          $("#mainInventoryTable").append(tr)
        }
      }

    })
  }

});

})
   //____________________________________________

$(document).ready(function () {
  //populates the customer dropdown
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/allCustomers',

    success: function (data) {
      for (i = 0; i < data.length; i++) {
        var custName = data[i].clientName;
        var dropOption = "<option data-name=" + custName + "  >" + custName + "</option>";
        $("#customerNames").append(dropOption)
      }

    }
  });


});


//toggle on and off the 'add client' box

$("#nevermind").click(function () {
  $("#newClientInput").hide();
});
$("#addNewCustomer").click(function () {
  $("#newClientInput").show();
});
//____________________________________________


//add a new client
$("#newClientSubmit").on("click", function (event) {
  event.preventDefault();
  var clientName = $("#clientName").val();
  var primaryContact = $("#primContact").val();
  var phoneNumber = $("#phNumber").val();
  var emailAddress = $("#emailAddress").val();
  var street = $("#street").val();
  var city = $("#city").val();
  var state = $("#state").val();
  var zipCode = $("#zipCode").val();

  var customerInfo = {
    "clientName": clientName,
    "primaryContact": primaryContact,
    "phone": phoneNumber,
    "email": emailAddress,
    "streetAddress": street,
    "city": city,
    "ST": state,
    "zipcode": zipCode
  }
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/newCustomer',
    data: customerInfo,
    success: function (data) {
      $("#clientName").val("");
      $("#primContact").val("");
      $("#phNumber").val("");
      $("#emailAddress").val("");
      $("#street").val("");
      $("#city").val("");
      $("#state").val("");
      $("#zipCode").val("");
    }

  });



});
function winebox(varData) {
  console.log("switch sales varietal: ", varData);
  var boxType;
  switch (varData) {
    case "Sauvignon Blanc":
      boxType = "WRT";
      break;
    case "Chardonnay":
      boxType = "WRU";
      break;
    case "Pinot Noir":
      boxType = "WRU";
      break;
    case "Red Blend":
      boxType = "WBAJA";
      break;
    case "Zinfandel":
      boxType = "WBAJA";
      break;
    case "Merlot":
      boxType = "WBAJA";
      break;
    case "Cabernet":
      boxType = "WBAJA";
  }
  console.log("boxtype switch chosen:", boxType);
  return boxType;
}

// input form for adding a new sale or promise
$("#addNewSale").on("click", function (event) {
  event.preventDefault();
  var salesAccountName = $("#salesAccountName").val();
  var salesVintage = $("#salesVintage").val();
  var salesQuantity = $("#salesQuantity").val();
  var salesVarietalDropdown = $("select.zebra").find(':selected').data('name');
  console.log("varietal picked: ", salesVarietalDropdown);
  console.log("varietal picked: ", typeof salesVarietalDropdown);
  var actualPromise = $("#actualPromise").val();
  var newSaleInfo;
  var boxType;
  console.log("box type", boxType);
 
  if (actualPromise === "Actual") {
    var newSaleInfo = {
      "accountName": salesAccountName,
      "vintage": salesVintage,
      "varietal": salesVarietalDropdown,
      "actualOrdered": salesQuantity,
      "boxType":     winebox(salesVarietalDropdown)
    }
  } else {
    var newSaleInfo = {
      "accountName": salesAccountName,
      "vintage": salesVintage,
      "varietal": salesVarietalDropdown,
      "promised": salesQuantity,
      "boxType":     winebox(salesVarietalDropdown)
    }
  }



  console.log(newSaleInfo);
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/orders',
    data: newSaleInfo,
    success: function (data) {
      console.log("you posted new info");
    }

  })
  // .then(res => {
  //   console.log ("success")
  // }).catch(err => {
  //   console.log(err);
  // });

});
//____________________________________________

// update client notes
$("#updateNotes").on("click", function (event) {

  // event.preventDefault();
  var clientNote = $("#clientNotes").val();
  var noteID = $("#clientNotes").attr("data-id")
  // console.log("Note ID for PUT: ", noteID);


  var note = {
    "notes": clientNote,
    "id": noteID
  }
  $.ajax({
    type: 'PUT',
    url: 'http://localhost:3000/api/customerinfo',
    data: note,
    success: function (data) {
      console.log("note updated");
    }

  });

});
//____________________________________________


//grab #id from dropdown
$("#customerNames").change(function (dataname) {
  var nameValue = $("select.custom-select").find(':selected').data('name');
  $("#salesAccountName").attr("value",nameValue)
  $("#newAccountName").attr("value",nameValue)
  console.log("name selected: ", nameValue)


  $("#clientNotes").text("")
  one(dataname);
  two(dataname);

  //to unjumble this mess, just erase the function parts and put both function bodies back inside of here... also erase the nameValues from the function and dataname from this function
  //____________________________________________
});


//call and get specific customer orders : populate table
function one(data) {
  nameValue = data.originalEvent.target.value
  console.log("data: ", data.originalEvent.target.value);
        $("#clientWines").empty()

  $.ajax({
    type: 'GET',
    url: "http://localhost:3000/api/oneCustomer/" + nameValue + "",
    success: function (data) {
      for (let i = 0; i < data.length; i++) {
        var accountName = (data[i].accountName)
        var vintage = (data[i].vintage)
        var varietal = (data[i].varietal)
        var actualOrdered = (data[i].actualOrdered)
        var promised = (data[i].promised)
        var boxType = (data[i].boxType)
        var notes = (data[i].notes)
        var custId = (data[i].id)
        var tr = $("<tr>")
        var th = $("<th scope='row'></th>")
        var clientName = $("<td>" + accountName + "</td>")
        var vint = $("<td>" + vintage + "</td>")
        var kind = $("<td>" + varietal + "</td>")
        var actual = $("<td>" + actualOrdered + "</td>")
        var clientPromised = $("<td>" + promised + "</td>")
        var boxtype = $("<td>" + boxType + "</td>")

        vint.attr("data-id", custId);
        kind.attr("data-id", custId);
        actual.attr("data-id", custId);
        clientPromised.attr("data-id", custId);
        boxtype.attr("data-id", custId);

        tr.append(vint, kind, actual, clientPromised, boxtype)
        $("#clientWines").append(tr)
      }
    }

  })

}
// call and get specific customer contact info : populate card
function two(data) {
  console.log("2data: ", data.originalEvent.target.value);
  nameValue = data.originalEvent.target.value

  $.ajax({
    type: 'GET',
    url: "http://localhost:3000/api/customerContact/" + nameValue + "",
    success: function (data) {
      console.log("contact data: ", data)
      for (let i = 0; i < data.length; i++) {
        var clientName = data[i].clientName;
        var clientID = data[i].id
        console.log("client id: ", clientID)
        var primaryContact = data[i].primaryContact;
        var phoneNumber = data[i].phone;
        var email = data[i].email;
        var street = data[i].streetAddress;
        var city = data[i].city;
        var st = data[i].ST;
        var zipcode = data[i].zipcode;
        var notes = data[i].notes

        console.log(data);

        $("#clientNotes").attr("data-id", clientID)
        $("#customerName").text(clientName)
        $("#primaryContact").text(primaryContact)
        $("#phoneNumber").text(phoneNumber)
        $("#email").text(email)
        $("#address").text(street)
        $("#address").append("<br>")
        $("#address").append(city + ", " + st + " " + zipcode);
        $("#clientNotes").val(notes)
      }
    }

  })
}

function varName(nameVal){
  // $("#salesAccountName").attr("value",nameValue)
  // $("#newAccountName").attr("value",nameValue)
}
$("#newWineInput").change(function (data) {
  var varietalType = $("select.varietalDropdown").find(':selected').data('name');
  console.log("varietal selected: ", varietalType)
  // console.log(data)
  // varName()
  //add a new wine
});
  $("#addNewWine").on("click", function (event) {
  event.preventDefault();
  var accountName = $("#newAccountName").val();
  var newVintage = $("#newVintage").val();
  var salesVarietalDropdown = $("select.varietalDropdown").find(':selected').data('name');
  console.log("nv", salesVarietalDropdown);
  var quantOrderd = $("#quantOrdered").val();
  var quantPromised = $("#quantPromised").val();
  var boxType = winebox(salesVarietalDropdown) 
  
  
  var newWineInfo = {
    "accountName": accountName,
    "vintage": newVintage,
    "varietal": salesVarietalDropdown,
    "actualOrdered": quantOrderd,
    "promised": quantPromised,
    "boxType": boxType
  }
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/orders',
    data: newWineInfo,
    success: function (data) {
      $("#newAccountName").val("");
      $("#newVintage").val("");
      $("#newVarietal").val("");
      $("#quantOrdered").val("");
      $("#quantPromised").val("");
      $("#newBoxType").val("");
    }
    
  });
  

})
  //____________________________________________
$(document).ready(function () {

  //toggle on and off the 'add client' box

  $("#nevermind").click(function () {
    $("#newClientInput").hide();
  });
  $("#addNewCustomer").click(function () {
    $("#newClientInput").show();
  });
  //____________________________________________

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
  //____________________________________________

  //dynamically generate contact info and populate the wine fields
  // on click, run these two ajax calls and then put the info onto the screen

});


// input form for adding a new sale or promise
$("#addNewSale").on("click", function (event) {
  event.preventDefault();
  var salesAccountName = $("#salesAccountName").val();
  var salesVintage = $("#salesVintage").val();
  var salesQuantity = $("#salesQuantity").val();
  var salesVarietalDropdown = $("#salesVarietalDropdown").val(); 
  var actualPromise = $("#actualPromise").val();
console.log("varietal picked: ",salesVarietalDropdown);
  var newSaleInfo;
if (actualPromise === "Actual") {
  var newSaleInfo = {
    "accountName": salesAccountName,
    "vintage": salesVintage,
    "varietal": salesVarietalDropdown,
    "actual": salesQuantity
  }

} else {
  var newSaleInfo = {
    "accountName": salesAccountName,
    "vintage": salesVintage,
    "varietal": salesVarietalDropdown,
    "promised": salesQuantity
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




//grab #id from dropdown
$("#customerNames").change(function () {
  var nameValue = $("select.custom-select").find(':selected').data('name');
  console.log("name selected: ", nameValue)
  //call and get specific customer orders : populate table
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
  // call and get specific customer contact info : populate card
  $.ajax({
    type: 'GET',
    url: "http://localhost:3000/api/customerContact/" + nameValue + "",
    success: function (data) {
      console.log("contact data: ", data)
      for (let i = 0; i < data.length; i++) {
        var clientName = data[i].clientName;
        console.log("client namesssss: ", clientName)
        var primaryContact = data[i].primaryContact;
        var phoneNumber = data[i].phone;
        var email = data[i].email;
        var street = data[i].streetAddress;
        var city = data[i].city;
        var st = data[i].ST;
        var zipcode = data[i].zipcode;

        $("#customerName").text(clientName)
        $("#primaryContact").text(primaryContact)
        $("#phoneNumber").text(phoneNumber)
        $("#email").text(email)
        $("#address").text(street)
        $("#address").append("<br>")
        $("#address").append(city + ", " + st + " " + zipcode)

      }
    }

  })
  //____________________________________________
});
//add a new wine
$("#addNewWine").on("click", function (event) {

  event.preventDefault();
  var accountName = $("#newAccountName").val();
  var newVintage = $("#newVintage").val();
  var newVarietal = $("#newVarietal").val();
  var quantOrderd = $("#quantOrdered").val();
  var quantPromised = $("#quantPromised").val();
  var boxType = $("#boxType").val();


  var newWineInfo = {
    "accountName": accountName,
    "vintage": newVintage,
    "varietal": newVarietal,
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

});
  //____________________________________________
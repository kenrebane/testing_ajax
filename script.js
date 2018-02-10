
//When key is released while typing in the search bar,
//do an ajax request on the text inside input.
//And output the request results
$("#search").keyup(function() {
  //Get the input value
  var searchData = $("#search").val(),
      regExp = new RegExp(searchData, "i");
  //Get data from data.json

  $.getJSON("data.json", function(data){

    var output = "<ul class='search_result'>";
        //For each element in the data.json file check for
        //value
        $.each(data, function(key, val) {
          //if any part of the text on the search input field
          //is equal to the name value of data.json output it
          if ( val.name.search(regExp) != -1) {

            output += "<li>" +
                      "<h2>"+val.name+"</h2>" +
                      "<img src='images/" + val.shortname + "_tn.jpg'" +
                      "alt='Image of'" +val.name+ "' />" +
                      "<p>"+val.bio+"</p>" +
                      "</li>";
          }
        });
        output += "</ul>";

        $("#update").html(output);


  });
});

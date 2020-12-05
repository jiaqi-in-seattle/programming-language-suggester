$(document).ready(function() {
  $("button#start").click(function(event) {
  $("form#survey").show();
  });
});

$(document).ready(function() {      
  $("form#survey").submit(function(event) {
    event.preventDefault();
    $("#sql").hide();
    $("#swift").hide();
    $("#java").hide();

    var kinds = $("input:radio[name=kinds]:checked").val();
    if (kinds === "android") {
      $("#result").show();
      $("#java").show();

    } else if (kinds === "ios") {
      $("#result").show();
      $("#swift").show();
    } else if (kinds === "database") {
      $("#result").show();
      $("#sql").show();
    }

    var nameInput = $("input#name").val();
    $("#username").text(nameInput);

  });
});
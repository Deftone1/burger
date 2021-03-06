$(() => {
  $(".devour-form").on("click", function (event) {
    event.preventDefault();
    var burger_id = $(this).children(".burger_id").val();
    
    const burgerDevoured = { devoured: 1 };
    console.log(burger_id, burgerDevoured);
    // Send the PUT request.
    $.ajax("/api/burgers/" + burger_id, {
      type: "PUT",
      data: burgerDevoured,
     
        // contentType: "application/json; charset=UTF-8",
    }).then(() => {
        console.log('Burger has been devoured');
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#name").val().trim(),
      devoured: 0
     
    };

    // ajax POST request
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(() => {
      console.log("Your burger has been added!");
      location.reload();
    })
  });

});


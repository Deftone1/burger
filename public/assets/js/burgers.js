$(() => {
  $(".devour-form").on("submit", function (event) {
    event.preventDefault();
    var burger_id = $(this).children(".burger_id").val();
    console.log(burger_id);
    const burgerDevoured = { devoured: true };
    // Send the PUT request.
    $.ajax(`/api/burgers/${burger_id}`, {
      type: "PUT",
      data: burgerDevoured,
     
    //   contentType: "application/json; charset=UTF-8",
    }).then(() => {
        console.log('Burger has been devoured');
      location.reload();
    });
  });

//   $(".create-form").on("submit", (event) => {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     const newCat = {
//       name: $("#ca").val().trim(),
//       sleepy: $("[name=sleepy]:checked").val().trim(),
//     };

//     // Send the POST request.
//     $.ajax("/api/cats", {
//       type: "POST",
//       data: newCat,
//     }).then(() => {
//       // Reload the page to get the updated list
//       location.reload();
//     });
//   });

//   $(".delete-cat").on("click", function () {
//     const id = $(this).data("id");

//     // Send the DELETE request.
//     $.ajax(`/api/cats/${id}`, {
//       type: "DELETE",
//     }).then(() => {
//       // Reload the page to get the updated list
//       location.reload();
//     });
//   });
});

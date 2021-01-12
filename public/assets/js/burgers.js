$(function () {
    // THIS FUNCTION GRABS THE USER INPUT FROM THE FRONT-END AND PASSES IT INTO THE PUT METHOD
    $(".devoured").on("click", function (event) {
        var id = $(this).attr("id");
        var newBurgerState = { devoured: 1 };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(function () {
            console.log("This Burger Was Devoured!");
            location.reload();
        });
    });

    // THIS GRABS THE USER INPUT AND PASSES IT INTO THE POST METHOD
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 0
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Created A New Burger!");
            location.reload();
        })
    });


});
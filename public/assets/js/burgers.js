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


});

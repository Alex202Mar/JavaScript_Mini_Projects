document.addEventListener('DOMContentLoaded', function() {
    const colour = document.querySelector(".colour");

    // Function to get a cookie by name
    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length === 2) return parts.pop().split(";").shift();
    }

    // Retrieve the background colour from the cookie (if it exists)
    var savedColour = getCookie("background_colour");

    if (savedColour) {
        document.body.style.backgroundColor = savedColour;
    }
});
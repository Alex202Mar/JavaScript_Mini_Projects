document.addEventListener('DOMContentLoaded', function() {
    const Colour = document.querySelector(".colour");

    // Function to generate a random Colour
    function generateRandomColour() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColour = "#";
        for (let i = 0; i < 6; i++) {
            hexColour += hex[getRandomNumber()];
        }
        return hexColour;
    }

    // Function to get a random number
    function getRandomNumber() {
        return Math.floor(Math.random() * hex.length);
    }

    // Function to get a cookie by name
    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length === 2) return parts.pop().split(";").shift();
    }

    // Retrieve the background Colour from the cookie (if it exists)
    var savedColour = getCookie("background_Colour");

    if (savedColour) {
        Colour.textContent = savedColour;
        document.body.style.backgroundColour = savedColour;
    }
});

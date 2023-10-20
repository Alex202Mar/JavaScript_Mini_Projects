// Assuming you have a button with ID "generateColourBtn" on your second page
const generateColourBtn = document.getElementById("generateColourBtn");

generateColourBtn.addEventListener("click", function() {
    const hexColour = generateRandomColour();

    // Set the hexColour as a cookie
    document.cookie = `background_Colour=${hexColour}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
});

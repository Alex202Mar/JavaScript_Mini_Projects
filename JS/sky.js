
function changeImage() {
    var image = document.getElementById('ImgSwap');
    if (image.src.match("/Assets/AlexPFP.jpeg")) {
        image.src = "/Assets/sky.jpg";
    } else {
        image.src = "/Assets/AlexPFP.jpeg";
    }
}


function changeImage() {
    var image = document.getElementById('ImgSwap');
    if (image.src.match("/JavaScript_Mini_Projects/Assets/AlexPFP.jpeg")) {
        image.src = "/JavaScript_Mini_Projects/Assets/sky.jpg";
    } else {
        image.src = "/JavaScript_Mini_Projects/Assets/AlexPFP.jpeg";
    }
}

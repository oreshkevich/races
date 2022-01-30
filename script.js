function img() {
  let images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    length = images.length,
    index = 1;

  setInterval(function () {
    if (index == length) index = 0;
    document.getElementById(
      "image"
    ).style.backgroundImage = `url('./img/${index++}.jpg')`;
  }, 7000);
}
img();

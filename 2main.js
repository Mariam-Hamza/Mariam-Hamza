function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.includes("EXORCIST7.jpeg")) {
      image.src = "images/EXOimg7.jpeg";
    } else {
      image.src = "images/EXORCIST7.jpeg";
    }
  }

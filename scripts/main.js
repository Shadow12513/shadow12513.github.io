var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/penguin.jpg') {
      myImage.setAttribute ('src','images/penguin2.jpg');
    } else {
      myImage.setAttribute ('src','images/penguin.jpg');
    }
}

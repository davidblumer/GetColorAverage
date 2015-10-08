window.onload = function () {


    var files = document.getElementByTagName('img');

alert("asdsad");
    for (var i = 0; i < files.length; i++) {
        var rgbStr = addImage(files[i].src);
        alert('files[i].src');
        var box = files[i];
        box.style.backgroundColor = rgbStr;
        box.style.width = files[i].naturalWidth + 'px';
        box.style.height = files[i].naturalHeight + 'px';

    }
};

function addImage(imgSrc) {
    var img = document.createElement('img');
    var element = document.createElement('div');
    element.className = 'row';
    element.innerHTML =
            '<div class="cell color">' +
            '  <div class="box"></div>' +
            '</div>';

    img.src = imgSrc;
    img.onload = function () {
        var rgb = getAverageColor(img);
        var rgbStr = 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')';

        return rgbStr;

    };

    document.getElementById('images').appendChild(element);
}

function getAverageColor(img) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var width = canvas.width = img.naturalWidth;
    var height = canvas.height = img.naturalHeight;

    ctx.drawImage(img, 0, 0);

    var imageData = ctx.getImageData(0, 0, width, height);
    var data = imageData.data;
    var r = 0;
    var g = 0;
    var b = 0;

    for (var i = 0, l = data.length; i < l; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
    }

    r = Math.floor(r / (data.length / 4));
    g = Math.floor(g / (data.length / 4));
    b = Math.floor(b / (data.length / 4));

    return {r: r, g: g, b: b};
}


document.ondragover = function (event) {
    event.preventDefault();
};


document.getElementById("myDiv").onmouseover = function() {
    var div = document.getElementById("myDiv");
    var paragraph = document.getElementById("myParagraph");

    div.style.backgroundColor = "#4CAF50";
    div.style.color = "#FFFFFF";
    paragraph.innerHTML = "The style has been changed!";
};

function removeContent() {
    var div = document.getElementById("myDiv");
    div.innerHTML = 'Aathe dhar le ke';
}

var qrcode = new QRCode("qrcode", {
    text: "wurmpworld.com",
    width: 128,
    height: 128,
    colorDark : "rgb(255, 255, 174)",
    colorLight : "#fa7082",
    correctLevel : QRCode.CorrectLevel.H
});

document.getElementById("url").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        pictureTime();
    }
})

function pictureTime() {
    var cleanUrl =  document.getElementById("url").value
    if (cleanUrl.length < 3 || !cleanUrl.includes(".")) {
        alert("Improper entry")
        return
    }
    qrcode.makeCode(cleanUrl)
}
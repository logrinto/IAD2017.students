var CryptoJS = require("crypto-js");
var fs = require("fs");
var password = require("./password");

var path = './data/'

var encrypt = function(filename) {
  fs.readFile(path + filename, function(err, data) {
    var encrypted = CryptoJS.AES.encrypt(data.toString(), password);
    fs.writeFile(path + filename + '.enc', encrypted.toString());
  });
}

var encryptBase64 = function(filename) {
  fs.readFile(path + filename, function(err, data) {
    var base64data = new Buffer(data).toString('base64');

    var encrypted = CryptoJS.AES.encrypt('data:image/jpg;base64,'+base64data.toString(), password);
    fs.writeFile(path + filename + '.enc', encrypted.toString());
  });
}


encrypt('informations.json');

encryptBase64('img/01.jpg');
encryptBase64('img/02.jpg');
encryptBase64('img/03.jpg');
encryptBase64('img/04.jpg');
encryptBase64('img/05.jpg');
encryptBase64('img/06.jpg');
encryptBase64('img/07.jpg');
encryptBase64('img/08.jpg');
encryptBase64('img/09.jpg');
encryptBase64('img/10.jpg');
encryptBase64('img/11.jpg');
encryptBase64('img/12.jpg');
encryptBase64('img/13.jpg');


// var encrypted = CryptoJS.AES.encrypt(string, password);
// console.log(encrypted.toString());

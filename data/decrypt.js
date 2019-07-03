const CryptoJS = require("crypto-js");
const fs = require("fs");
const password = require("./password");

const path = "./data/";

const decrypt = filename => {
  fs.readFile(`${path + filename}.enc`, (err, data) => {

    var bytes  = CryptoJS.AES.decrypt(data.toString(), password);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);

    fs.writeFile(`${path + filename}`, originalText, (err, result) => {
      if (err) console.log("error", err);
    });
  });
};

decrypt("informations.json");

// encryptBase64("img/01.jpg");
// encryptBase64("img/02.jpg");
// encryptBase64("img/03.jpg");
// encryptBase64("img/04.jpg");
// encryptBase64("img/05.jpg");
// encryptBase64("img/06.jpg");
// encryptBase64("img/07.jpg");
// encryptBase64("img/08.jpg");
// encryptBase64("img/09.jpg");
// encryptBase64("img/10.jpg");
// encryptBase64("img/11.jpg");
// encryptBase64("img/12.jpg");
// encryptBase64("img/13.jpg");

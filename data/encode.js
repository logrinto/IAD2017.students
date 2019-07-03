const CryptoJS = require("crypto-js");
const fs = require("fs");
const password = require("./password");

const path = "./data/";

const encrypt = filename => {
  fs.readFile(path + filename, (err, data) => {
    const encrypted = CryptoJS.AES.encrypt(data.toString(), password);
    fs.writeFile(
      `${path + filename}.enc`,
      encrypted.toString(),
      (err, result) => {
        if (err) console.log("error", err);
      }
    );
  });
};

const encryptBase64 = filename => {
  fs.readFile(path + filename, (err, data) => {
    const base64data = new Buffer(data).toString("base64");

    const encrypted = CryptoJS.AES.encrypt(
      `data:image/jpg;base64,${base64data.toString()}`,
      password
    );
    fs.writeFile(
      `${path + filename}.enc`,
      encrypted.toString(),
      (err, result) => {
        if (err) console.log("error", err);
      }
    );
  });
};

encrypt("informations.json");

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

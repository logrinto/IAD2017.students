const CryptoJS = require("crypto-js");
const fs = require("fs");
const password = require("./password");
const class2017 = require("./2017");
const class2019 = require("./2019");

const path = "./data/";

const decrypt = filename => {
  fs.readFile(`${path + filename}.enc`, (err, data) => {
    var bytes = CryptoJS.AES.decrypt(data.toString(), password);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);

    fs.writeFile(`${path + filename}`, originalText, (err, result) => {
      if (err) console.log("error", err);
    });
  });
};

const decryptBase64 = filename => {
  fs.readFile(`${path + filename}.enc`, (err, data) => {
    var bytes = CryptoJS.AES.decrypt(data.toString(), password);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);

    var onlyBase64 = originalText.substr("data:image/jpg;base64,".length);

    let binaryData = Buffer.from(onlyBase64, "base64");

    fs.writeFile(`${path + filename}`, binaryData, (err, result) => {
      if (err) console.log("error", err);
    });
  });
};

decrypt("informations.json");

class2017.forEach(item => decryptBase64(item));
class2019.forEach(item => decryptBase64(item));

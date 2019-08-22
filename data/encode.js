const CryptoJS = require("crypto-js");
const fs = require("fs");
const password = require("./password");
const class2017 = require("./2017");
const class2019 = require("./2019");

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
    const base64data = Buffer.from(data).toString("base64");

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

class2017.forEach(item => encryptBase64(item));
class2019.forEach(item => encryptBase64(item));

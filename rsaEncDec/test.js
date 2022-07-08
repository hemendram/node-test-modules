const crypto = require("crypto");
const { encryptDataRSA, decryptDataRSA } = require("./encDecData");
const { encryptDataAES, decryptDataAES } = require("../aesEncDec/encDecData");

let text = "test";
let key = crypto.randomBytes(32);
let encAES = encryptDataAES(text, key);
let strAES = JSON.stringify({ data: encAES, sessionId : key });
let encRSA = encryptDataRSA(strAES);

let decRSA = decryptDataRSA(encRSA);
let jsonDecRSA = JSON.parse(decRSA); 
console.log(`RSA dec: ${jsonDecRSA.key}`);
if(decRSA && decRSA.data && decRSA.key){
    let decAES = decryptDataAES(decRSA.data, decRSA.key);
    console.log(`AES dec: ${decAES}`);
}
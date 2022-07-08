const crypto = require("crypto");
const { decData, encData } = require("./encDecData");

let messageText = "hello world";
// secret key generate 32 bytes of random data
const Securitykey = crypto.randomBytes(32);

let encVal = encData(messageText, Securitykey);
let decVal = decData(encVal, Securitykey);

console.log(`Encval : ${JSON.stringify(encVal)}`);
console.log(`Decval : ${JSON.stringify(decVal)}`);

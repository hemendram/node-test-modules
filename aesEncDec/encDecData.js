// crypto module
const crypto = require("crypto");
const algorithm = "aes-256-cbc"; //Using AES encryption
const iv = crypto.randomBytes(16);

const encryptDataAES = (text, key) => {
    let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

const decryptDataAES = (textObject, key) => {
    let iv = Buffer.from(textObject.iv, 'hex');
    let encryptedText = Buffer.from(textObject.encryptedData, 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

module.exports = {
    encryptDataAES,
    decryptDataAES
}
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');
const relativeOrAbsolutePathtoPrivateKey = `private.pem`;
const relativeOrAbsolutePathToPublicKey = `public.pem`;

const encryptDataRSA = (toEncrypt) => {
  const absolutePath = path.resolve(__dirname, relativeOrAbsolutePathToPublicKey);
  const publicKey = fs.readFileSync(absolutePath, 'utf8');
  const buffer = Buffer.from(toEncrypt, 'utf8');
  const encrypted = crypto.publicEncrypt(publicKey, buffer);
  return encrypted.toString('base64');
}

const decryptDataRSA = (toDecrypt) => {
  const absolutePath = path.resolve(__dirname, relativeOrAbsolutePathtoPrivateKey);
  const privateKey = fs.readFileSync(absolutePath, 'utf8');
  const buffer = Buffer.from(toDecrypt, 'base64');
  const decrypted = crypto.privateDecrypt(
    {
      key: privateKey.toString(),
      passphrase: '',
    },
    buffer,
  )
  return decrypted.toString('utf8');
}

module.exports = {
  encryptDataRSA,
  decryptDataRSA
}
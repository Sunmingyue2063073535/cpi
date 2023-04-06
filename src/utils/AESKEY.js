// 1. 导入包
// npm install crypto-js --save

// 2. 工具类
// utils.js
import CryptoJS from 'crypto-js'
//加密
export function encrypt(word, keyStr) {
    keyStr = keyStr || '6ArCeirfQmJkaefe'
    const key = CryptoJS.enc.Utf8.parse(keyStr)
    const srcs = CryptoJS.enc.Utf8.parse(word)
    const encrypted = CryptoJS.AES.encrypt(srcs, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    })
    return encrypted
}

export function encryptHex(word, keyStr) {
    const encrypted = encrypt(word, keyStr)
    return encrypted.ciphertext.toString()
}
//解密
export function decryptBase64(word, keyStr) {
    let newStr = keyStr.replace(/"/g, "");
    const key = CryptoJS.enc.Utf8.parse(newStr)
    const decrypted = CryptoJS.AES.decrypt(word, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    })
    return decrypted.toString(CryptoJS.enc.Utf8)
}
//解密
export function decryptHex(hexWord) {
    const wordArray = CryptoJS.enc.Hex.parse(hexWord)
    const sss = CryptoJS.enc.Base64.stringify(wordArray)
    return decryptBase64(sss, '6ArCeirfQmJkaefe')
}
//加密
export function jiami(data) {
    const keyStr = '6ArCeirfQmJkaefe'
    return (encryptHex(JSON.stringify(data, null), keyStr))
}
// 解密
export function jiemi(data) {
    const keyStr = '6ArCeirfQmJkaefe'
    return JSON.parse(decryptHex(data, keyStr))
}
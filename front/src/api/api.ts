import axios from "axios";
const instance = axios.create({
    baseURL: process.env.VUE_APP_BACKEND_BASE_URL,
    withCredentials: true // 추후 쿠키 사용시 true로 변경 (자격 증명 허용 설정)
});
axios.defaults.withCredentials = true; // 추후 쿠키 사용시 true로 변경 (자격 증명 허용 설정)

export function getBaseNumber(number: number, base: number) {
    return instance.post("/api/kalc/base", { number, base });
}

export function getGrayCode(number: number) {
    return instance.post("/api/kalc/grayCode", { "number": number });
}

export function getBCDCode(number: number) {
    return instance.post("/api/kalc/bcdCode", { "number": number });
}

export function getBinary(number: number) {
    return instance.post("/api/kalc/binary", { "number": number });
}

export function getParityBit(number: number) {
    return instance.post("/api/kalc/parityBit", { "number": number });
}

export function getHammingCode(number: number) {
    return instance.post("/api/kalc/hammingCode", { "number": number });
}

export function getOneComplement(number: number) {
    return instance.post("/api/kalc/oneComplement", { "number": number });
}

export function getTwoComplement(number: number) {
    return instance.post("/api/kalc/twoComplement", { "number": number });
}

export function getEncryption(string: String) {
    return instance.post("/api/kalc/encryption", { "string": string });
}

export function getDecryption(string: String) {
    return instance.post("/api/kalc/decryption", { "string": string });
}

export function getBit(bit1: String, bit2: String, type: String) {
    return instance.post("/api/kalc/bit", { bit1, bit2, type });
}

export function getSubnet(ip: String, subnet: String) {
    return instance.post("/api/kalc/subnet", { ip, subnet });
}
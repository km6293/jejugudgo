package io.zien.backend.kalc.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class KalcService {
    public String calculateBase(Long number, Long base) {
        return Long.toString(number, base.intValue());
    }

    public String calculateGrayCode(Long number) {
        return Long.toBinaryString(number ^ (number >> 1));
    }

    public String calculateOneComplement(Long number) {
        String binaryString = Long.toBinaryString(number);
        StringBuilder complement = new StringBuilder();

        for (int i = 0; i < binaryString.length(); i++) {
            char bit = binaryString.charAt(i);
            complement.append(bit == '0' ? '1' : '0');
        }

        return complement.toString();
    }

    public String calculateTwoComplement(Long number) {
        String oneComplement = calculateOneComplement(number);
        StringBuilder twoComplement = new StringBuilder();

        int carry = 1;
        for (int i = oneComplement.length() - 1; i >= 0; i--) {
            char bit = oneComplement.charAt(i);
            if (bit == '1' && carry == 1) {
                twoComplement.insert(0, '0');
            } else if (bit == '0' && carry == 1) {
                twoComplement.insert(0, '1');
                carry = 0;
            } else {
                twoComplement.insert(0, bit);
            }
        }

        return twoComplement.toString();
    }

    public String calculateBCDCode(Long number) {
        StringBuilder bcdCode = new StringBuilder();

        while (number > 0) {
            int digit = (int) (number % 10);
            String binaryDigit = String.format("%04d", Integer.parseInt(Integer.toBinaryString(digit)));
            bcdCode.insert(0, binaryDigit);
            number /= 10;
        }
        return bcdCode.toString();
    }

    public String calculateBinary(Long number) {
        return Long.toBinaryString(number);
    }

    public String calculateParityBit(Long number) {
        String binaryString = Long.toBinaryString(number);
        int countOnes = 0;

        for (int i = 0; i < binaryString.length(); i++) {
            if (binaryString.charAt(i) == '1') {
                countOnes++;
            }
        }

        char parityBit;
        if (countOnes % 2 == 0) {
            parityBit = '0';
        } else {
            parityBit = '1';
        }

        return Long.toBinaryString(number)+ parityBit;
    }

    public String calculateHammingCode(Long number) {
        String binaryString = Long.toBinaryString(number);
        int m = 1;
        while ((int) Math.pow(2, m) < (binaryString.length() + m + 1)) m++;
        StringBuilder hammingCode = new StringBuilder();
        int dataIndex = 0;
        for (int i = 0; i < binaryString.length() + m; i++) {
            if (((i + 1) & i) == 0) hammingCode.append(0);
            else hammingCode.append(dataIndex < binaryString.length() ? binaryString.charAt(dataIndex++) : 0);
        }
        for (int i = 0; i < m; i++) {
            int parityIndex = (int) Math.pow(2, i) - 1;
            int parityValue = 0;
            for (int j = parityIndex; j < binaryString.length() + m; j += 2 * (parityIndex + 1)) {
                for (int k = j; k < Math.min(j + parityIndex + 1, binaryString.length() + m); k++) {
                    parityValue ^= Character.getNumericValue(hammingCode.charAt(k));
                }
            }
            hammingCode.setCharAt(parityIndex, parityValue == 0 ? '0' : '1');
        }
        return hammingCode.toString();
    }

    public String calculateEncryption(String string) {
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < string.length(); i++) {
            char ch = string.charAt(i);
            if (Character.isLowerCase(ch)) {
                char shifted = (char) ('a' + (ch - 'a' + 3) % 26);
                result.append(shifted);
            } else if (Character.isUpperCase(ch)) {
                char shifted = (char) ('A' + (ch - 'A' + 3) % 26);
                result.append(shifted);
            } else {
                result.append(ch);
            }
        }
        return result.toString();
    }

    public String calculateDecryption(String string) {
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < string.length(); i++) {
            char ch = string.charAt(i);
            if (Character.isLowerCase(ch)) {
                char shifted = (char) ('a' + (ch - 'a' - 3 + 26) % 26);
                result.append(shifted);
            } else if (Character.isUpperCase(ch)) {
                char shifted = (char) ('A' + (ch - 'A' - 3 + 26) % 26);
                result.append(shifted);
            } else {
                result.append(ch);
            }
        }
        return result.toString();
    }

    public String calculateBit(String bit1, String bit2, String type) {
        int num1 = Integer.parseInt(bit1, 2);
        int num2 = Integer.parseInt(bit2, 2);
        int result;

        switch (type) {
            case "AND":
                result = num1 & num2;
                break;
            case "OR":
                result = num1 | num2;
                break;
            case "XOR":
                result = num1 ^ num2;
                break;
            default:
                throw new IllegalArgumentException("Unsupported operation type: " + type);
        }
        return Integer.toBinaryString(result);
    }

    public String[] calculateSubnet(String ip, String subnet) {
        String[] ipOctets = ip.split("\\.");
        String[] subnetOctets = subnet.split("\\.");

        StringBuilder ipBinary = new StringBuilder();
        StringBuilder subnetBinary = new StringBuilder();
        for (String octet : ipOctets) {
            ipBinary.append(String.format("%8s", Integer.toBinaryString(Integer.parseInt(octet))).replace(' ', '0'));
        }
        for (String octet : subnetOctets) {
            subnetBinary.append(String.format("%8s", Integer.toBinaryString(Integer.parseInt(octet))).replace(' ', '0'));
        }

        StringBuilder networkAddressBinary = new StringBuilder();
        for (int i = 0; i < ipBinary.length(); i++) {
            if (ipBinary.charAt(i) == '1' && subnetBinary.charAt(i) == '1') {
                networkAddressBinary.append('1');
            } else {
                networkAddressBinary.append('0');
            }
        }

        String networkAddress = ipFromBinary(networkAddressBinary.toString());

        int subnetSize = (int) Math.pow(2, countZeroBits(subnetBinary));

        long startAddress = decimalIP(networkAddress) + 1;
        long endAddress = startAddress + subnetSize - 4;

        String[] result = new String[2];
        result[0] = networkAddress;
        result[1] = longToIp(startAddress) + " - " + longToIp(endAddress);
        return result;
    }

    private static long decimalIP(String ip) {
        String[] octets = ip.split("\\.");
        long result = 0;
        for (int i = 0; i < octets.length; i++) {
            result += (Long.parseLong(octets[i]) & 0xFF) << (8 * (3 - i));
        }
        return result;
    }

    private static int countZeroBits(StringBuilder binary) {
        int count = 0;
        for (int i = 0; i < binary.length(); i++) {
            if (binary.charAt(i) == '0') {
                count++;
            } else {
                break;
            }
        }
        return count;
    }

    public static String longToIp(long ipAddressLong) {
        StringBuilder ipAddressStringBuilder = new StringBuilder();
        for (int i = 3; i >= 0; i--) {
            long octet = (ipAddressLong >> (8 * i)) & 0xFF;
            ipAddressStringBuilder.append(octet);
            if (i > 0) {
                ipAddressStringBuilder.append(".");
            }
        }
        return ipAddressStringBuilder.toString();
    }

    private static String ipFromBinary(String binaryIP) {
        StringBuilder ip = new StringBuilder();
        for (int i = 0; i < 32; i += 8) {
            int octet = Integer.parseInt(binaryIP.substring(i, i + 8), 2);
            ip.append(octet);
            if (i < 24) {
                ip.append('.');
            }
        }
        return ip.toString();
    }
}
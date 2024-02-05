package io.zien.backend.kalc.controller;

import io.zien.backend.kalc.dto.KalcDto;
import io.zien.backend.kalc.service.KalcService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/kalc/")
@RestController
@RequiredArgsConstructor
public class KalcController {
    private final KalcService kalcService;

    @PostMapping("/base")
    @ResponseBody
    public String calculateBase(@RequestBody KalcDto request) {
        return kalcService.calculateBase(request.getNumber(), request.getBase());
    }

    @PostMapping("/oneComplement")
    @ResponseBody
    public String calculateOneComplement(@RequestBody KalcDto request) {
        return kalcService.calculateOneComplement(request.getNumber());
    }

    @PostMapping("/twoComplement")
    @ResponseBody
    public String calculateTwoComplement(@RequestBody KalcDto request) {
        return kalcService.calculateTwoComplement(request.getNumber() );
    }

    @PostMapping("/grayCode")
    @ResponseBody
    public String calculateGrayCode(@RequestBody KalcDto request) {
        return kalcService.calculateGrayCode(request.getNumber() );
    }

    @PostMapping("/bcdCode")
    @ResponseBody
    public String calculateBCDCode(@RequestBody KalcDto request) {
        return kalcService.calculateBCDCode(request.getNumber() );
    }

    @PostMapping("/binary")
    @ResponseBody
    public String calculateBinary(@RequestBody KalcDto request) {
        return kalcService.calculateBinary(request.getNumber() );
    }

    @PostMapping("/parityBit")
    @ResponseBody
    public String calculateParityBit(@RequestBody KalcDto request) {
        return kalcService.calculateParityBit(request.getNumber() );
    }

    @PostMapping("/hammingCode")
    @ResponseBody
    public String calculateHammingCode(@RequestBody KalcDto request) {
        return kalcService.calculateHammingCode(request.getNumber() );
    }

    @PostMapping("/encryption")
    @ResponseBody
    public String calculateEncryption(@RequestBody KalcDto request) {
        return kalcService.calculateEncryption(request.getString());
    }

    @PostMapping("/decryption")
    @ResponseBody
    public String calculateDecryption(@RequestBody KalcDto request) {
        return kalcService.calculateDecryption(request.getString());
    }

    @PostMapping("/bit")
    @ResponseBody
    public String calculateBit(@RequestBody KalcDto request) {
        return kalcService.calculateBit(request.getBit1(), request.getBit2(), request.getType());
    }

    @PostMapping("/subnet")
    @ResponseBody
    public String[] calculateSubnet(@RequestBody KalcDto request) {
        return kalcService.calculateSubnet(request.getIp(), request.getSubnet());
    }
}
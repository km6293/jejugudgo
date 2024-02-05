package io.zien.backend.kalc.dto;

import lombok.*;

@AllArgsConstructor
@ToString
@Getter
@Setter
@Builder
@NoArgsConstructor
public class KalcDto {
    Long number;
    Long base;
    String string;
    String bit1;
    String bit2;
    String type;
    String ip;
    String subnet;
}

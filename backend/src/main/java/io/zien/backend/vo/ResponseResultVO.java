package io.zien.backend.vo;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder

public class ResponseResultVO {
  private final String result;
  private final String error;
}

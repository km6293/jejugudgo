package io.zien.backend.customException;

public class CustomTargetNotMatchedException extends Exception {
  public CustomTargetNotMatchedException(String errorMessage) {
    super(errorMessage);
  }
}

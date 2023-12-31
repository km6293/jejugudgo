package io.zien.backend.customException;

public class CustomBadParameterException extends Exception {
  public CustomBadParameterException(String errorMessage) {
    super(errorMessage);
  }
}

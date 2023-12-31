package io.zien.backend.customException;

public class CustomIdxNotFoundException extends Exception {
  public CustomIdxNotFoundException(String errorMessage) {
    super(errorMessage);
  }
}

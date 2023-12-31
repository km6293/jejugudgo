package io.zien.backend.customException;

public class CustomPathNotFoundException extends Exception {
  public CustomPathNotFoundException(String errorMessage) {
    super(errorMessage);
  }
}

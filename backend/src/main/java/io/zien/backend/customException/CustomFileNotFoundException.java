package io.zien.backend.customException;

public class CustomFileNotFoundException extends Exception {
  public CustomFileNotFoundException(String errorMessage) {
    super(errorMessage);
  }
}

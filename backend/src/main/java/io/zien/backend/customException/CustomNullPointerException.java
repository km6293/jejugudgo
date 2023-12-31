package io.zien.backend.customException;

public class CustomNullPointerException extends Exception {
  public CustomNullPointerException(String errorMessage) {
    super(errorMessage);
  }
}

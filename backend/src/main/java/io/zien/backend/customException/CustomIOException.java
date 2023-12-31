package io.zien.backend.customException;

public class CustomIOException extends Exception {
  public CustomIOException(String errorMessage) {
    super(errorMessage);
  }
}

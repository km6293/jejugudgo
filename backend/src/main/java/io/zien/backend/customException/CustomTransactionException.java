package io.zien.backend.customException;

public class CustomTransactionException extends Exception {
  public CustomTransactionException(String errorMessage) {
    super(errorMessage);
  }
}

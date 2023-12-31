package io.zien.backend.globalHandler;

import io.zien.backend.customException.CustomBadParameterException;
import io.zien.backend.customException.CustomExcelParserException;
import io.zien.backend.customException.CustomFileNotFoundException;
import io.zien.backend.customException.CustomFileParserException;
import io.zien.backend.customException.CustomIdxNotFoundException;
import io.zien.backend.customException.CustomNullPointerException;
import io.zien.backend.customException.CustomPathNotFoundException;
import io.zien.backend.customException.CustomTargetNotMatchedException;
import io.zien.backend.customException.CustomTransactionException;
import java.io.FileNotFoundException;
import java.io.IOException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {
  @ExceptionHandler(CustomExcelParserException.class)
  public ResponseEntity<String> handleExcelParserException(CustomExcelParserException e) {
    return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
  }

  @ExceptionHandler(CustomIdxNotFoundException.class)
  public ResponseEntity<String> handleIdxNotFoundException(CustomIdxNotFoundException e) {
    return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
  }

  @ExceptionHandler(CustomFileNotFoundException.class)
  public ResponseEntity<String> handleFileNotFoundException(CustomFileNotFoundException e) {
    return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
  }

  @ExceptionHandler(CustomPathNotFoundException.class)
  public ResponseEntity<String> handlePathNotFoundException(CustomPathNotFoundException e) {
    return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
  }

  @ExceptionHandler(CustomNullPointerException.class)
  public ResponseEntity<String> handleNullPointerException(CustomNullPointerException e) {
    return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
  }

  @ExceptionHandler(CustomBadParameterException.class)
  public ResponseEntity<String> handleCustomBadParameterException(CustomBadParameterException e) {
    return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
  }

  @ExceptionHandler(CustomFileParserException.class)
  public ResponseEntity<String> handleCustomFileParserException(CustomFileParserException e) {
    return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
  }

  @ExceptionHandler(CustomTargetNotMatchedException.class)
  public ResponseEntity<String> handleCustomTargetNotMatchedException(
      CustomTargetNotMatchedException e) {
    return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
  }

  @ExceptionHandler(CustomTransactionException.class)
  public ResponseEntity<String> handleCustomTransactionException(
      CustomTransactionException e) {
    return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
  }

  @ExceptionHandler(IOException.class)
  public ResponseEntity<String> handleIOException(
      IOException e) {
    return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
  }

  @ExceptionHandler(FileNotFoundException.class)
  public ResponseEntity<String> handleFileNotFoundExceptionException(
      FileNotFoundException e) {
    return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
  }
}

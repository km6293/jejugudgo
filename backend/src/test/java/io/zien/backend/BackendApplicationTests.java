package io.zien.backend;

import static org.junit.Assert.assertEquals;

import io.zien.backend.kalcBase.service.CloudRegisterService;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BackendApplicationTests {

  @Autowired
  private CloudRegisterService sampleService;

  @Test
  public void testGetGreeting() {
    String greeting = sampleService.getGreeting();
    assertEquals("Hello, World!", greeting);
  }
}
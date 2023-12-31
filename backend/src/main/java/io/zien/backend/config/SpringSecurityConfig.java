package io.zien.backend.config;

import java.util.Arrays;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfig {

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        .authorizeRequests(authorizeRequests ->
            authorizeRequests.anyRequest().permitAll()
        )
        .cors(cors -> {
          CorsConfiguration configuration = new CorsConfiguration();
          configuration.setAllowedOrigins(Arrays.asList(
              "http://localhost:9001",
              "http://localhost:9002",
              "http://localhost:9003"
          ));
          configuration.setAllowedMethods(
              Arrays.asList("GET", "POST", "PUT", "DELETE")); // 허용할 HTTP 메서드 목록 설정
          configuration.setAllowedHeaders(
              Arrays.asList("*")); // 허용할 헤더 목록 설정 "*" or "Authorization", "Content-Type"
          configuration.setExposedHeaders(
              Arrays.asList("Content-Disposition")); // 브라우저에서 접근 가능한 헤더 설정
          configuration.setAllowCredentials(true); // 쿠키를 받을건지, 자격 증명 허용 설정

          UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
          source.registerCorsConfiguration("/**", configuration);

          cors.configurationSource(request -> configuration);
        })
        .csrf(csrf -> {
          csrf.disable();
//                    csrf.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
//                    csrf.ignoringRequestMatchers("/api");
        });

    return http.build();
  }
}
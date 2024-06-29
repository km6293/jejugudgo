/**
 * 토큰 재발행
 */
export interface IPostAuthTokenRefreshRequest {
  test: string;
}
export interface IPostAuthTokenRefreshResponse {
  test: string;
}

/**
 * 인증 번호 전송
 */
export interface IPostAuthSmsSendRequest {
  name: string;
  phoneNumber: string;
}
export interface IPostAuthSmsSendResponse {
  test: boolean;
}

/**
 * 인증 번호 검증
 */
export interface IPostAuthSmsCheckRequest {
  name: string;
  phoneNumber: string;
  verificationCode: string;
}
export interface IPostAuthSmsCheckResponse {
  test: boolean;
}

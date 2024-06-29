/**
 * 회원가입
 */
export interface IPostAuthSignupRequest {
  email: string;
  password: string;
  nickname: string;
  name: string;
  phoneNumber: string;
}
export interface IPostAuthSignupResponse {
  test: string;
}

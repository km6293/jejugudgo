/**
 * 유저 정보 반환 응답 타입
 */
export interface IGetAuthUserResponse {
  id: number;
  email: string;
  nickname: string;
  name: string;
  numberTag: string;
  profileImageUrl: string;
  userRole: 'AUTHOR' | 'USER';
}

/**
 * 유저 정보 변경 요청 타입
 */
export interface IPatchAuthUserRequest {
  test: string;
}

/**
 * 유저 정보 변경 응답 타입
 */
export interface IPatchAuthUserResponse {
  test: string;
}

/**
 * 유저 권한 변경 응답 타입
 */
export interface IPatchAuthRoleResponse {
  success: boolean;
}

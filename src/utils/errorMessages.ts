export const errorMessages: Record<string, string> = {
  AUTH_01: '존재 하지 않는 이메일로 로그인 시도',
  AUTH_02: '비밀번호가 불일치 한 경우 발생',
  AUTH_03: '인증 과정에서 오류가 발생한 경우 발생',
  TOKEN_01: '토큰이 만료된 경우 발생',
  INVALID_VALUE_01: '요청 값을 찾을 수 없는 경우 발생',
  INVALID_VALUE_02: '알맞지 않은 값을 요청 값으로 넣은 경우 발생',
  INVALID_VALUE_03: '요청 값이 validation 결과 알맞지 않은 경우 발생',
  INVALID_VALUE_04: '요청 값이 이미 존재하는 경우 발생',
  IMAGE_01: 'Multipart 이미지 업로드 과정에서 서버에 빈 값을 건네 줄 경우 발생',
  NOT_ALLOWED_01:
    '게시글 작성, 코스 수정 등 권한이 없는 유저가 해당 기능을 수행하려고 할 경우 발생',
};

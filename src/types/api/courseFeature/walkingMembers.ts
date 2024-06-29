/**
 * 사진/짧은 글 리스트 응답 타입
 */
export interface IGetRecordsResponse {
  test: string;
}

/**
 * 사진/짧은 글 작성 요청 타입
 */
export interface IPostRecordRequest {
  test: string;
}

/**
 * 사진/짧은 글 작성 응답 타입
 */
export interface IPostRecordResponse {
  test: string;
}

/**
 * 사진/짧은 글 수정 요청 타입
 */
export interface IPatchRecordRequest {
  test?: string;
}

/**
 * 사진/짧은 글 수정 응답 타입
 */
export interface IPatchRecordResponse {
  test: string;
}

/**
 * 사진/짧은 글 삭제 응답 타입
 */
export interface IDeleteRecordResponse {
  test: string;
}

/**
 * 걷기 멤버 리스트 반환 (승인 완료) 응답 타입
 */
export interface IGetWalkingMembersApprovedResponse {
  test: string;
}

/**
 * 걷기 멤버 리스트 반환 (승인 X) 응답 타입
 */
export interface IGetWalkingMembersPendingResponse {
  test: string;
}

/**
 * 걷기 참여 신청 요청 타입
 */
export interface IPostWalkingMemberRequest {
  test: string;
}

/**
 * 걷기 참여 신청 응답 타입
 */
export interface IPostWalkingMemberResponse {
  test: string;
}

/**
 * 걷기 참여 신청 응답 요청 타입
 */
export interface IPostWalkingMemberResponseRequest {
  test: string;
}

/**
 * 걷기 참여 신청 응답 응답 타입
 */
export interface IPostWalkingMemberResponseResponse {
  test: string;
}

/**
 * 걷기 멤버 내보내기/나가기 응답 타입
 */
export interface IDeleteWalkingMemberResponse {
  test: string;
}

/**
 * 리뷰 리스트 반환 (전체) 응답 타입
 */
export interface IGetAllReviewsResponse {
  test: string;
}

/**
 * 리뷰 리스트 반환 (특정 유저) 응답 타입
 */
export interface IGetUserReviewsResponse {
  test: string;
}

/**
 * 리뷰 생성 요청 타입
 */
export interface IPostReviewRequest {
  test: string;
}

/**
 * 리뷰 생성 응답 타입
 */
export interface IPostReviewResponse {
  test: string;
}

/**
 * 리뷰 수정 요청 타입
 */
export interface IPatchReviewRequest {
  test?: string;
}

/**
 * 리뷰 수정 응답 타입
 */
export interface IPatchReviewResponse {
  test: string;
}

/**
 * 리뷰 삭제 응답 타입
 */
export interface IDeleteReviewResponse {
  test: string;
}

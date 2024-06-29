/**
 * 댓글 리스트 응답 타입
 */
export interface IGetCommentsResponse {
  test: string;
}

/**
 * 댓글 생성 요청 타입
 */
export interface IPostCommentRequest {
  test: string;
}

/**
 * 댓글 생성 응답 타입
 */
export interface IPostCommentResponse {
  test: string;
}

/**
 * 댓글 수정 요청 타입
 */
export interface IPatchCommentRequest {
  test?: string;
}

/**
 * 댓글 수정 응답 타입
 */
export interface IPatchCommentResponse {
  test: string;
}

/**
 * 댓글 삭제 응답 타입
 */
export interface IDeleteCommentResponse {
  test: string;
}

/**
 * 대댓글 리스트 응답 타입
 */
export interface IGetNestedCommentsResponse {
  nestedComments: {
    test: string;
  }[];
}

/**
 * 대댓글 생성 요청 타입
 */
export interface IPostNestedCommentRequest {
  test: string;
}

/**
 * 대댓글 생성 응답 타입
 */
export interface IPostNestedCommentResponse {
  test: string;
}

/**
 * 대댓글 수정 요청 타입
 */
export interface IPatchNestedCommentRequest {
  test?: string;
}

/**
 * 대댓글 수정 응답 타입
 */
export interface IPatchNestedCommentResponse {
  test: string;
}

/**
 * 대댓글 삭제 응답 타입
 */
export interface IDeleteNestedCommentResponse {
  test: string;
}

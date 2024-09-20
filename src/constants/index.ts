export type IPurposeListProps = {
  purposeTypes: string;
  title: string;
};
export const purposeList = [
  { purposeTypes: 'R1V01', title: '체력 증진' },
  { purposeTypes: 'R1V02', title: '자연감상' },
  { purposeTypes: 'R1V03', title: '도전, 성취' },
  { purposeTypes: 'R1V04', title: '주변관광' },
  { purposeTypes: 'R1V05', title: '사회적 교류' },
  { purposeTypes: 'R1V06', title: '스트레스 해소' },
  { purposeTypes: 'R1V07', title: '지인과의 시간' },
];

export type ITogetherListProps = {
  togetherTypes: string;
  title: string;
};
export const togetherList = [
  { togetherTypes: 'R2V01', title: '연인, 배우자' },
  { togetherTypes: 'R2V02', title: '친구' },
  { togetherTypes: 'R3V03', title: '혼자' },
  { togetherTypes: 'R4V04', title: '가족' },
  { togetherTypes: 'R5V05', title: '반려동물' },
  { togetherTypes: 'R6V06', title: '직장동료' },
  { togetherTypes: 'R7V07', title: '제주걷고 동행' },
];

export type IReviewListProps = {
  reviewTags: string;
  title: string;
};
export const reviewList = [
  { reviewTags: 'R3V01', title: '아름다운 경치' },
  { reviewTags: 'R3V02', title: '안전한 길' },
  { reviewTags: 'R3V03', title: '평온한 분위기' },
  { reviewTags: 'R3V04', title: '많은 편의시설' },
  { reviewTags: 'R3V05', title: '도전적' },
  { reviewTags: 'R3V06', title: '깔끔한 길' },
  { reviewTags: 'R3V07', title: '운동효과' },
  { reviewTags: 'R3V08', title: '함께 걷는 사람' },
  { reviewTags: 'R3V09', title: '사진 촬영' },
  { reviewTags: 'R3V10', title: '초보자 친화적' },
  { reviewTags: 'R3V11', title: '반려견 동행' },
  { reviewTags: 'R3V12', title: '주변 식당, 카페' },
  { reviewTags: 'R3V13', title: '가벼운 산책' },
  { reviewTags: 'R3V14', title: '좋은 교통환경' },
];

export interface ISpotType {
  name: string;
  longitude: string;
  latitude: string;
}

export interface ICourseDataType {
  input: string;
  page: number;
  ShowSearch: boolean;
  spot: ISpotType[];
  visibilityStatus: boolean;
  courseName: string;
  keyword: string[];
}

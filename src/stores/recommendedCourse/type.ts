export interface ISpotType {
  name: string;
  longitude: string;
  latitude: string;
}

export interface IselectedObjectType {
  type: 'startPoint' | 'endPoint' | 'wayPoint';
  index?: number;
}

export interface ICourseDataType {
  input: string;
  visibilityStatus: boolean;
  page: number;
  ShowSearch: boolean;
  startPoint: ISpotType;
  wayPoint: ISpotType[];
  endPoint: ISpotType;
  courseName: string;
  keyword: string[];
  suggestionCourse: string;
  selectedObject: IselectedObjectType;
}

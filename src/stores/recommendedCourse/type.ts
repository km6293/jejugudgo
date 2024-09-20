export interface ISpotType {
  name: string;
  longitude: number;
  latitude: number;
  address?: string;
  category?: string;
  type: 'USER' | 'TOUR';
  contentTypeId?: string;
}

export interface IselectedObjectType {
  type: 'startPoint' | 'endPoint' | 'wayPoint';
  index?: number;
}

export interface ICourseDataType {
  input: string;
  visibilityStatus: boolean;
  page: number;
  showSearch: boolean;
  startPoint: ISpotType;
  wayPoint: ISpotType[];
  endPoint: ISpotType;
  courseName: string;
  keyword: string[];
  suggestionCourse: string;
  selectedObject: IselectedObjectType;
}

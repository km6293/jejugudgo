import { defineStore } from 'pinia';
import { computed, reactive, toRefs } from 'vue';
import { ICourseDataType, ISpotType } from './type';

export const useCreateCourseStore = defineStore('createCourse', () => {
  const initialState: ICourseDataType = {
    input: '',
    page: 1,
    ShowSearch: false,
    startPoint: { name: '', longitude: '', latitude: '' },
    wayPoint: [],
    endPoint: { name: '', longitude: '', latitude: '' },
    visibilityStatus: true,
    courseName: '',
    keyword: [],
    suggestionCourse: '',
    selectedObject: { type: 'startPoint' },
  };

  const state = reactive({ ...initialState });

  const addWayPoint = () => {
    state.wayPoint.push({ name: '', longitude: '', latitude: '' });
  };

  const removeWayPoint = (index: number) => {
    state.wayPoint.splice(index, 1);
  };

  const updateData = <K extends keyof ICourseDataType>(
    item: K,
    value: K extends 'wayPoint' ? ISpotType : ICourseDataType[K],
    index?: number
  ) => {
    if (item === 'wayPoint' && typeof index === 'number') {
      state.wayPoint[index] = value as ISpotType;
    } else {
      state[item] = value as ICourseDataType[K];
    }
  };

  const addKeyword = (keyword: string) => {
    if (!state.keyword.includes(keyword)) {
      state.keyword.push(keyword);
    }
  };

  const removeKeyword = (keyword: string) => {
    state.keyword = state.keyword.filter((k) => k !== keyword);
  };

  const $reset = () => {
    Object.assign(state, initialState);
  };

  const startPointValid = computed(() => {
    return (
      !!state.startPoint.name &&
      !!state.startPoint.longitude &&
      !!state.startPoint.latitude &&
      parseFloat(state.startPoint.longitude) !== 0 &&
      parseFloat(state.startPoint.latitude) !== 0
    );
  });

  const endPointValid = computed(() => {
    return (
      !!state.endPoint.name &&
      !!state.endPoint.longitude &&
      !!state.endPoint.latitude &&
      parseFloat(state.endPoint.longitude) !== 0 &&
      parseFloat(state.endPoint.latitude) !== 0
    );
  });

  const wayPointsValid = computed(() =>
    state.wayPoint.every(
      (point) =>
        !!point.name &&
        !!point.longitude &&
        !!point.latitude &&
        parseFloat(point.longitude) !== 0 &&
        parseFloat(point.latitude) !== 0
    )
  );

  return {
    ...toRefs(state),
    $reset,
    updateData,
    addWayPoint,
    removeWayPoint,
    addKeyword,
    removeKeyword,
    startPointValid,
    endPointValid,
    wayPointsValid,
  };
});

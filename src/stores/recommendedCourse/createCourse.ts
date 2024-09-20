import { defineStore } from 'pinia';
import { computed, reactive, toRefs } from 'vue';
import { ICourseDataType, ISpotType } from './type';

export const useCreateCourseStore = defineStore('createCourse', () => {
  const initialState: ICourseDataType = {
    input: '',
    page: 1,
    showSearch: false,
    startPoint: { name: '', longitude: 0, latitude: 0, type: 'USER' },
    wayPoint: [],
    endPoint: { name: '', longitude: 0, latitude: 0, type: 'USER' },
    visibilityStatus: true,
    courseName: '',
    keyword: [],
    suggestionCourse: '',
    selectedObject: { type: 'startPoint' },
  };

  const state = reactive({ ...initialState });

  const addWayPoint = () => {
    state.wayPoint.push({ name: '', longitude: 0, latitude: 0, type: 'USER' });
  };

  const removeWayPoint = (index: number) => {
    state.wayPoint.splice(index, 1);
  };

  const updateData = <K extends keyof ICourseDataType>(
    item: K,
    value: K extends 'wayPoint' ? ISpotType : ICourseDataType[K],
    index?: number
  ) => {
    if (item === 'wayPoint' && typeof index !== 'undefined') {
      console.log(`Updating wayPoint at index ${index}:`, value);
      state.wayPoint[index] = value as ISpotType;
    } else {
      console.log(`Updating ${item}:`, value);
      state[item] = value as ICourseDataType[K];
    }
  };

  const addKeyword = (id: string) => {
    if (!state.keyword.includes(id)) {
      state.keyword.push(id);
    }
  };

  const removeKeyword = (id: string) => {
    state.keyword = state.keyword.filter((k) => k !== id);
  };

  const $reset = () => {
    Object.assign(state, initialState);
  };

  const startPointValid = computed(() => {
    return (
      state.startPoint.name !== '' &&
      state.startPoint.longitude !== 0 &&
      state.startPoint.latitude !== 0
    );
  });

  const endPointValid = computed(() => {
    return (
      state.endPoint.name !== '' &&
      state.endPoint.longitude !== 0 &&
      state.endPoint.latitude !== 0
    );
  });

  const wayPointsValid = computed(() =>
    state.wayPoint.every(
      (point) =>
        point.name !== '' && point.longitude !== 0 && point.latitude !== 0
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

const initialState = {
  fetching: false,
  fetched: false,
  lesson: {},
  error: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_LESSON_PENDING":
      return { ...state, fetching: true };
    case "UPDATE_LESSON_FULFILLED":
      return { ...state, fetching: false, fetched: true, lesson: action.payload.data };
    case "UPDATE_LESSON_REJECTED":
      return { ...state, fetching: false, fetched: false, lesson: {}, error: action.payload };
      case "REQUEST_LESSON_BY_ID_PENDING":
      return { ...state, fetching: true };
    case "REQUEST_LESSON_BY_ID_FULFILLED":
      return { ...state, fetching: false, fetched: true, lesson: action.payload.data };
    case "REQUEST_LESSON_BY_ID_REJECTED":
      return { ...state, fetching: false, fetched: false, lesson: {}, error: action.payload };
    default:
      return state;
  }
}

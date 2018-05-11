const initialState = {
  fetching: false,
  fetched: false,
  lesson: {},
  error: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_LESSON_PENDING":
      return { ...state, fetching: true };
    case "CREATE_LESSON_FULFILLED":
      return { ...state, fetching: false, fetched: true, lesson: action.payload.data };
    case "CREATE_LESSON_REJECTED":
      return { ...state, fetching: false, fetched: false, lesson: {}, error: action.payload };
    default:
      return state;
  }
}

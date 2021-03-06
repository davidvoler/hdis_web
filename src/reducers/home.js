const initialState = {
  fetching: false,
  fetched: false,
  lessons: [],
  error: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_LESSONS_PENDING":
      return { ...state, fetching: true };
    case "REQUEST_LESSONS_FULFILLED":
      return { ...state, fetching: false, fetched: true, lessons: action.payload.data };
    case "REQUEST_LESSONS_REJECTED":
      return { ...state, fetching: false, fetched: false, lessons: [], error: action.payload };
    default:
      return state;
  }
}

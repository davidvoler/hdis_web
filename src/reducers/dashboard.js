const initialState = {
  fetching: false,
  fetched: false,
  dashboard: {},
  error: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_DASHBOARD_PENDING":
      return { ...state, fetching: true };
    case "REQUEST_DASHBOARD_FULFILLED":
      return { ...state, fetching: false, fetched: true, dashboard: action.payload.data };
    case "REQUEST_DASHBOARD_REJECTED":
      return { ...state, fetching: false, fetched: false, dashboard: {}, error: action.payload };
    default:
      return state;
  }
}

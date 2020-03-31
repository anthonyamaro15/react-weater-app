const initialValue = {
  result: "las vegas",
  loading: false,
  data: {},
  error: "",
  apiKey: "eb293611b49b059d8a3390adbe3d3d08"
};

export const mainReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "FETCHING_DATA":
      return {
        ...state,
        loading: true
      };
    case "GET_VALUE":
      return {
        ...state,
        result: action.payload.value
      };
    case "GOT_DATA":
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

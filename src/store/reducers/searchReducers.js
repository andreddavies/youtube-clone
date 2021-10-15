const INITIAL_STATE = {
  videos: [],
  loading: false,
  error: false,
};

export default searchReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "IS_SEARCHING":
      return {
        videos: [],
        loading: true,
        error: false,
      };

    case "SUCCESS_SEARCH":
      return {
        videos: action.videos,
        loading: false,
        error: false,
      };

    case "ERROR_SEARCH":
      return {
        videos: [],
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

import API_KEY from "../../api";
import youtubeSearch from "youtube-api-v3-search";

export const isSearching = () => {
  return {
    type: "IS_SEARCHING",
    loading: true,
    error: false,
  };
};

export const successSearch = (videos) => {
  return {
    type: "SUCCESS_SEARCH",
    videos,
    loading: false,
    error: false,
  };
};

export const errorSearch = () => {
  return {
    type: "ERROR_SEARCH",
    loading: false,
    error: true,
  };
};

export const searchVideos = (term) => {
  return (dispatch) => {
    dispatch(isSearching());
    youtubeSearch(API_KEY, { q: term })
      .then((data) => dispatch(successSearch(data.items)))
      .catch(() => dispatch(errorSearch()));
  };
};

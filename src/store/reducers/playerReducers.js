const INITIAL_STATE = {
  video: {},
};

const player = (state = INITIAL_STATE, action) => {
  if (action.type === "VIDEO_PLAYER") {
    return {
      video: action.video,
    };
  } else {
    return state;
  }
};

export default player;

let initialState = {
  showEng: false,
};

export function showHideEng(state = initialState, action) {
  switch (action.type) {

    case "SHOW_ENGLISH":
      return {
        ...state,
        showEng: action.showEng
      };

    default:
      return state;
  }
}
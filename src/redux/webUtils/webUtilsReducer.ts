const initialState = {
  darkMode: true,
  data: {},
};

const webUtilsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default webUtilsReducer;

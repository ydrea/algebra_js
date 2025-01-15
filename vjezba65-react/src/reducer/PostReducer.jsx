export const POCETNO_STANJE = {
  loading: true,
  error: false,
  post: {},
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        loading: true,
        post: {},
        error: false,
      };
    case "FETCH_USPJEH":
      return {
        loading: true,
        post: action.payload,
        error: false,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: true,
      };
    default:
      return state;
  }
};

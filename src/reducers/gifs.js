import { REQUEST_GIFS, UPDATE } from "../actions";

const initialState = {
  data: [],
  language: "es",
  number: "15"
};

export default function gifs(state = initialState, action) {
  switch (action.type) {
    case REQUEST_GIFS:
      return {
        ...state,
        data: action.payload.body.data
      };
    case UPDATE: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}

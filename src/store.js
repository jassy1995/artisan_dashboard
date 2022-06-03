import { createContext, useReducer } from "react";

const Store = createContext();
const initialState = {
  skills: [],
  unSkills: [],
  customers: [],
  artisans: [],
  start: 0,
  loading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "START_FETCHING":
      return { ...state, loading: action.payload };
    case "END_FETCHING":
      return { ...state, loading: action.payload };
    case "GET_SKILL":
      return {
        ...state,
        skills: [...state.skills, ...action.payload],
        loading: false,
      };
    case "GET_UNSKILL":
      return {
        ...state,
        unSkills: [...state.unSkills, ...action.payload],
        loading: false,
      };
    case "GET_CUSTOMER":
      return {
        ...state,
        customers: action.payload,
      };
    case "GET_ARTISAN":
      return {
        ...state,
        artisans: action.payload,
      };
    case "INCREASE_START":
      return { ...state, start: action.payload };
    case "REDUCE_START":
      return { ...state, start: action.payload };
    default:
      return state;
  }
}
function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}

export { Store, StoreProvider };

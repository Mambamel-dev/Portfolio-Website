import { useReducer } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

const INTIAL_STATE = { darkMode: false };

//To change the initial state
const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      //if darkMode is false return true
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, INTIAL_STATE);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

import { useEffect, useReducer } from "react";
//import { Spinner, Alert } from "react-bootstrap";

const initialState = {
  loading: false,
  error: "",
  data: [],
};

function apiReducer(state, action) {
  switch (action.type) {
    case "DATA_FETCH_START":
      return { ...state, loading: true };
    case "DATA_FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "DATA_FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
        return state;
  }
}

export default function useFetch(url) {
  const [data, dispatch] = useReducer(apiReducer, initialState);

  useEffect(() => {
    dispatch({ type: "DATA_FETCH_START" });

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then((json) => {
        dispatch({ type: "DATA_FETCH_SUCCESS", payload: json });
      })
      .catch((error) => {
        dispatch({ type: "DATA_FETCH_ERROR", payload: error.message });
      });

      // eslint-disable-next-line
  },[]);

  return data;
}

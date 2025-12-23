import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCounter = () => {
  return useContext(CounterContext);
};

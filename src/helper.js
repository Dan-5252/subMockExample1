import * as helper from "./helper";

export const funcA = () => {
  return helper.funcB();
};

export const funcB = () => {
  return "original";
};

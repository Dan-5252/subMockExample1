import addOne from "./sub.js";
import * as core from "./core.js";

const doer = (x) => {
  return addOne(x);
};

const go = () => {
  return core.doer(2);
};

export { go as default, doer };

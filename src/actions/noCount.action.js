export const INCREMENT_ACTION = "INCREMENT";
export const DECREMENT_ACTION = "DECREMENT";

export const incNumberActionCreator = (num) => {
  return {
    type: INCREMENT_ACTION,
    num,
  };
};

export const decNumberActionCreator = () => {
  return {
    type: DECREMENT_ACTION,
  };
};

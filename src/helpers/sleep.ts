export const sleep = (sec: number = 1) => {
  return new Promise((resolve) => {
    setTimeout(resolve, sec * 1000);
  });
};

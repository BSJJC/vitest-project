async function asyncFun(timeout: number): Promise<object> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ msg: "OK" })
    }, timeout);
  })
};

async function resoledFun(): Promise<void> {
  return new Promise((res, rej) => {
    res();
  })
};

async function rejectedFun(): Promise<void> {
  return new Promise((res, rej) => {
    rej();
  })
};

export { asyncFun, resoledFun, rejectedFun };
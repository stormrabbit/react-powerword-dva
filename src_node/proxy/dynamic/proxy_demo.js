
export const extra_func = (fn) => {
  if(typeof fn !== 'function')
    return fn;
  const tempFn = fn;
  return (...args) => {
      tempFn(...args);
      console.log(`you are using ${tempFn.name}` )
  }
}
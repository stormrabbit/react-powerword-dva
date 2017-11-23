
export const extra_obj = (obj) => {
  if (typeof obj === 'object') {
    const oldToString = obj.toString;

    const myToString = () => {
      return `obj.toString() 原为 ${oldToString()} \n现为 [${Object.keys(obj).reduce( (pre, cur) => {
        if (cur !== 'toString') {
          pre += `,{key: ${cur}, value: ${obj[cur]}}`;
        }
        return pre;
      }, '').substring(1)}]`;
    }

    obj.toString = myToString;
    return obj;
  }
  return obj;
}

export const custom_func = (obj, fnName) => {
  const oldFunc = obj[fnName];
  const addExtr = () => {
    console.log(`为 ${fnName} 添加了新功能：`);
    oldFunc.call(obj);
    console.log('JavaScript 是最好的语言！');
  }

  obj[fnName] = addExtr;

  return obj;
}
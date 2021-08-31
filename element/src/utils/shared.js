export function isDef(val) {
  return val !== undefined && val !== null;
}

/* 该方法则是取判断对应字符是不是含有南北朝鲜字符（朝鲜和韩国）。 */
export function isKorean(text) {
  const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
  return reg.test(text);
}



function isObject(item: any) {
  return item && typeof item === 'object' && !Array.isArray(item) && item !== null;
}

export default function merge<A, B>(target: A, source: B): B & A {
  const t: any = target,
    s: any = source;
  if (isObject(t) && isObject(s)) {
    for (const key in s) {
      if (isObject(s[key])) {
        if (!t[key]) Object.assign(t, { [key]: {} });
        merge(t[key], s[key]);
      } else {
        Object.assign(t, { [key]: s[key] });
      }
    }
  }
  return t;
}

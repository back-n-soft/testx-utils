export function isNullOrUndefined<T>(
  obj: T | null | undefined
): obj is null | undefined {
  return typeof obj === 'undefined' || obj === null;
}

export function isNotNullOrUndefined<T>(obj: T | null | undefined): boolean {
  return !isNullOrUndefined(obj);
}

export function truncateObject(obj: any, num: number): any {
  if (isNullOrUndefined(obj)) {
    return obj;
  }
  if (obj.constructor === Array) {
    for (let i = 0; i < obj.length; i++) {
      obj[i] = truncateObject(obj[i], num);
    }
  } else if (obj.constructor === Object) {
    for (const [key, value] of Object.entries(obj)) {
      obj[key] = truncateObject(value, num);
    }
  } else if (obj.constructor === String) {
    return num >= obj.length || num < 0 ? obj : `${obj.slice(0, num)}...`;
  }
  return obj;
}

export function objectKeysToLowerCase(obj: any) {
  for (const key of Object.keys(obj)) {
    const keyLowerCase = key.toLowerCase();
    if (keyLowerCase !== key) {
      obj[keyLowerCase] = obj[key];
      delete obj[key];
    }
  }
  return obj;
}

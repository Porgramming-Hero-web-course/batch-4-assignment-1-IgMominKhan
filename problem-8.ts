const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean => {

  for (const key of keys) {
    if (!obj.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
}


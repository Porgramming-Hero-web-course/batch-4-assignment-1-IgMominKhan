const getPropertyValue = <Obj, P extends keyof Obj>(obj: Obj, key: P): Obj[P] => {
  return obj[key]
}

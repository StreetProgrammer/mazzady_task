export const findInNasted = (myArray: any[], childAttr: number) => {
  let parentObject = null;
  myArray.some((myParentObject) => {
    return myParentObject.options.some((childObject: any) => {
      if (childObject.id === childAttr) {
        parentObject = myParentObject;
        return true;
      }
    });
  });
  return parentObject;
};

export const findValue = (arr: any, val: any): any => {
  for (let obj of arr) {
    if (obj.id === val) {
      return obj;
    }

    if (obj.selected) {
      if (obj.selected.id === val) {
        return obj;
      } else {
        if (obj.selected.options && obj.selected.options.length > 0) {
          let result = findValue(obj.selected.options, val);
          if (result !== undefined) {
            return result;
          }
        }
      }
    }
    if (obj.options && obj.options.length > 0) {
      let result = findValue(obj.options, val);
      if (result !== undefined) {
        return result;
      }
    }
  }
};

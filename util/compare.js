import _ from 'lodash'

const compare = (a, b) => {
    const hasOwn = Object.prototype.hasOwnProperty;
    let newobj = {};
    let newobj2 = {};

    for (let key in a) {

      if (hasOwn.call(a, key)) {

        // 키가 있는경우 값을 비교
        if (hasOwn.call(b, key)) {
          if (!_.isEqual(a[key], b[key])) {
            newobj[key] = a[key];
          }
        // 키가 없는경우
        } else {
          newobj[key] = a[key];
        }
      }
    }

    for (let key in b) {
      if (hasOwn.call(b, key)) {

        // 키가 있는경우 값을 비교
        if (hasOwn.call(a, key)) {
          if (!_.isEqual(a[key], b[key])) {
            newobj2[key] = b[key];
          }
        // 키가 없는경우
        } else {
          newobj2[key] = b[key];
        }
      }
    }
    return {
      diffArray1: [] = newobj,
      diffArray2: [] = newobj2,
      equal: (Object.keys(newobj).length === 0 && Object.keys(newobj2).length === 0) ? true : false,
    };
  }


  export default compare
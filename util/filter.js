const filter = (obj, filter) => {

  const hasOwn = Object.prototype.hasOwnProperty;
  const objLength = Object.keys(objLength).length;
  const newObj = {};

  console.log(obj);
  console.log(filter);
  // const filtered = arr.filter(function(item) {
  //
  //   return item;
  //   //return item[key] === value;
  // });

  for (const value of filter) {
    if (hasOwn.call(obj, value)) {
     newObj[value] = obj[value];
    }
  }




  console.log(newObj);


  // if (typeof b === 'string') {
  //   for (let i = 0; i < objLength; i++) {
  //     if (Object.keys(a)[i] === b) {
  //       newObj[filter] = a[b];
  //       break;
  //     }
  //   }
  // } else {
  //   for (const value of b) {
  //     if (hasOwn.call(a, value)) {
  //       newObj[value] = a[value];
  //     }
  //   }
  // }
  // return newObj;
}

export default filter
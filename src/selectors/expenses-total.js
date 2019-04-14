export default (arr, type) => {
    return arr.reduce((total, obj) => {
      return total + Number(obj[type]);
    }, 0);
}
var moveZeros = function (arr) {
  var moveZeros = function (arr) {
    // filter array for 0's
    const filterArray = arr.filter(zero => zero === 0)
    //
    // run through array remove 0's
    let i
    while ((i = arr.indexOf(0)) != -1) {
      arr.splice(i, 1)
    }
    // after loop through the original array
    // concat filterArray with zero removed array
    return arr.concat(filterArray)
}

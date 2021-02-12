function cakes(recipe, available) {
  // TODO: insert code
  // Create array to place keys of recipe to filter the needed keys of available
  const recipeKeys = Object.keys(recipe)
  // Create an array for the values of the keys
  const recipeValues = Object.values(recipe)
  // creating new object
  // filter keys in available for keys in recipe
  const filteredAvail = Object.keys(available)
    .filter(key => recipeKeys.includes(key))
    .reduce((obj, key) => {
      obj[key] = available[key]
      return obj
    }, {})
    // .reduce((obj, key) => {
    //   return {
    //   ...obj,
    //   [key]: available[key]
    //   }
    // }, {})
  const filteredAvailKeys = Object.keys(filteredAvail)
  //
  function sortingArrays(a, b) {
    return recipeKeys.indexOf(a) - recipeKeys.indexOf(b)
  }

  const sortedAvailKeys = filteredAvailKeys.sort(sortingArrays)

  // console.log(filteredAvail)
  // console.log(filteredAvailKeys)
  // console.log(sortedAvailKeys)
  // console.log(recipeKeys)
  // compare two object values for each key
  if (recipeKeys.length !== filteredAvailKeys.length) {
    return 0
  } else {
    let howMany = []
    for (let i = 0; i < filteredAvailKeys.length; i++) {
      howMany.push(Math.floor(filteredAvail[filteredAvailKeys[i]] / recipeValues[i]))
    }
    // values will be divided into each other
    // find least divisible whole number of compared object values and return
    return Math.min(...howMany)
  }
}

// cakes({"cream":200,"flour":300,"sugar":150,"milk":100,"oil":100}, {"sugar":1700,"flour":20000,"milk":20000,"oil":30000,"cream":5000})

// Notes
//
// Other possible, more simple solutions:
//
// function cakes(recipe, available) {
//   return Object.keys(recipe).reduce(function(val, ingredient) {
//     return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
//   }, Infinity)
// }
//
// const cakes = (needs, has) => Math.min(
//   ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
// )

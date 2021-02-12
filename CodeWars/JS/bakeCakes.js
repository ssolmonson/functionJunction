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

function cakes(recipe, available) {
  // TODO: insert code
  // Create array to place keys of recipe to filter the needed keys of available
  const ingredients = Object.keys(recipe)
  // creating new object
  // filter keys in available for keys in recipe
  const filteredAvail = Object.keys(available)
    .filter(key => ingredients.includes(key))
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
  // compare two object values for each key
  // ex: recipe.name === available.name
  // values will be divided into each other
  // find least divisible whole number of compared object values and return
}
  // could use Object.entries()
  // const ingredients = Object.entries(recipe)

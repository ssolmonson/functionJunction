function likes(names) {
  // TODO

  // if no names
  if (names.length === 0) {
    // return "no one likes this"
    return "no one likes this"
  }
  // if one name
  if (names.length === 1) {
    // return "<name> likes this"
    return names[0] + " likes this"
  }
  // if two names
  if (names.length === 2) {
    // return "<name> and <name> like this"
    return names[0] + " and " + names[1] + " like this"
  }
  // if three
  if (names.length === 3) {
    // return "<name>, <name> and <name> like this"
    return names[0] + ", " + names[1] + " and " + names[2] + " like this"
  }
  // if any more return first two names and the amount of other names
  // return "first two names and <length of rest of amount of names> others like this"
  return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this"
}

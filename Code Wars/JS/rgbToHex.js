function rgb(r, g, b){
  // complete this function

  hexDecR = null
  hexDecG = null
  hexDecB = null

  if (r >= 255) {
    r = 255
    hexDecR = r.toString(16).toUpperCase()
  } else {
    hexDecR = r.toString(16).toUpperCase()
  }

  if (g >= 255) {
  g = 255
    hexDecG = g.toString(16).toUpperCase()
  } else {
    hexDecG = g.toString(16).toUpperCase()
  }

  if (b >= 255) {
    b = 255
    hexDecB = b.toString(16).toUpperCase()
  } else {
    hexDecB = b.toString(16).toUpperCase()
  }

  // hexDec = r.toString(16).toUpperCase() + g.toString(16).toUpperCase() + b.toString(16).toUpperCase()



  return hexDecR + hexDecG + hexDecB
}

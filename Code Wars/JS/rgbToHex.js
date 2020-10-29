function rgb(r, g, b){
  // complete this function
  // hexDec = r.toString(16).toUpperCase() + g.toString(16).toUpperCase() + b.toString(16).toUpperCase()

  // initiate variables for the rgb hex values
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

  // add a leading 0 if the hexadecimal string is a single digit
  if (hexDecR.length = 1) {
    hexDecR = hexDecR.padStart(2, hexDecR)
  }

  if (hexDecG.length = 1) {
    hexDecG = hexDecG.padStart(2, hexDecG)
  }

  if (hexDecB.length = 1) {
    hexDecB = hexDecB.padStart(2, hexDecB)
  }


  return hexDecR + hexDecG + hexDecB
}

function rgb(r, g, b){
  // complete this function
  if (r >= 255) {
    r = 255
    hexDecR = r.toString(16).toUpperCase()
  } else if (r < 0) {
    r = 0
    hexDecR = r.toString(16).toUpperCase()
  } else {
    hexDecR = r.toString(16).toUpperCase()
  }

  if (g >= 255) {
    g = 255
    hexDecG = g.toString(16).toUpperCase()
  } else if (g < 0) {
    g = 0
    hexDecG = g.toString(16).toUpperCase()
  } else {
    hexDecG = g.toString(16).toUpperCase()
  }

  if (b >= 255) {
    b = 255
    hexDecB = b.toString(16).toUpperCase()
  } else if (b < 0) {
    b = 0
    hexDecB = b.toString(16).toUpperCase()
  } else {
    hexDecB = b.toString(16).toUpperCase()
  }

  // hexDec = r.toString(16).toUpperCase() + g.toString(16).toUpperCase() + b.toString(16).toUpperCase()
  if (hexDecR.length = 1) {
    hexDecR = hexDecR.padStart(2, 0)
  }

  if (hexDecG.length = 1) {
    hexDecG = hexDecG.padStart(2, 0)
  }

  if (hexDecB.length = 1) {
    hexDecB = hexDecB.padStart(2, 0)
  }



  return hexDecR + hexDecG + hexDecB
}

function rgb(r, g, b){
  // complete this function
  // Defines each arguments value  that is outside the range of 0 to 255 as either
  // the highest of lowest value i.e. 0 or 255
  if (r >= 255) {
    r = 'FF'
    hexDecR = r.toString(16).toUpperCase()
  } else if (r < 0) {
    r = '00'
    hexDecR = r.toString(16).toUpperCase()
  } else {
    hexDecR = r.toString(16).toUpperCase()
  }

  if (g >= 255) {
    g = 'FF'
    hexDecG = g.toString(16).toUpperCase()
  } else if (g < 0) {
    g = '00'
    hexDecG = g.toString(16).toUpperCase()
  } else {
    hexDecG = g.toString(16).toUpperCase()
  }

  if (b >= 255) {
    b = 'FF'
    hexDecB = b.toString(16).toUpperCase()
  } else if (b < 0) {
    b = '00'
    hexDecB = b.toString(16).toUpperCase()
  } else {
    hexDecB = b.toString(16).toUpperCase()
  }

  // Places the leading 0 back onto those values which lost them through the output
  if (hexDecR.length = 1) {
    hexDecR = hexDecR.padStart(2, 0)
  }

  if (hexDecG.length = 1) {
    hexDecG = hexDecG.padStart(2, 0)
  }

  if (hexDecB.length = 1) {
    hexDecB = hexDecB.padStart(2, 0)
  }


  // Concats the final hexadecimal string value
  return hexDecR + hexDecG + hexDecB
}

// Possible things to adjust upon further review
// 1. Have upper and lower limits return their string equivalent i.e. FF for 255 and 00 for 0
// instead of passing them through conversion
// 2. Refractor repeating statements placing a function inside the main function.
// This will drastically reduce the lines neccessary.

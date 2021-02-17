function sumIntervals(intervals){
  // find lowest number
  // find highest number
  // solve for difference
  // const merged = [].concat.apply([], intervals)
  const merged = [].concat(...intervals)
  const maxInt = Math.max(...merged)
  const minInt = Math.min(...merged)
  return maxInt - minInt
  // Define ranges of intervals
  // Find intervals which overlap
  // Merge overlapping intervals based on highest and lowest of the two numbers
  // Find the difference of all
  // Add together
}
// This will solve, only is all intervals are overlapping
// First simple solution which passed the majority of tests,
// but not all and needs to dig deeper into finding intervals between sets

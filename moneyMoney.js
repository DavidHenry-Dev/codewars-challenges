function calculateYears(principal, interest, tax, desired) {
    // algrorithm: (principal * interest) - (interest * tax) + principal
  let totalYears = 0;
  while ( principal < desired ){
    principal += principal * interest * (1 - tax)
    totalYears++
  }
  return totalYears
}
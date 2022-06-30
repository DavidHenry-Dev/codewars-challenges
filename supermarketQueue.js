function queueTime(customers, n) {
    const openLine = new Array(n).fill(0);
    for (let i = 0; i < customers.length; i++) {
      const lowestWait = openLine.indexOf(Math.min(...openLine));
      openLine[lowestWait] += customers[i];
    }
    return Math.max(...openLine);
  }
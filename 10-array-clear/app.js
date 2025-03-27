function filter(numbers, shouldRemove) {
    const result = [];
    for (const num of numbers) {
      if (!shouldRemove(num)) {  
        result.push(num);
      }
    }
    return result;
  }
  const numbers = [3, 6, 9, 2];
  const filteredNumbers = filter(numbers, num => num > 5);
  
  console.log(filteredNumbers)
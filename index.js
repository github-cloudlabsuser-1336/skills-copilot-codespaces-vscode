// Example data array
const data = [
    [{ name: 'John' }, { name: 'Jane' }],
    [{ name: 'Bob' }]
  ];
  
  // Extract names
  const names = data.flatMap(innerArray => innerArray.map(obj => obj.name));
  
  console.log(names); // Output: ['John', 'Jane', 'Bob']
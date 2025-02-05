const add = (a, b) => {
    return a + b;
  };
  const sub = (a, b) => {
    return a - b;
  };
  const mul = (a, b) => {
    return a * b;
  };
  const div = (a, b) => {
    return a / b;
  };
  
  // Define the calci object
  const calci = { add };
  
  export { add, sub as diff, mul, div };
  export default calci;
  
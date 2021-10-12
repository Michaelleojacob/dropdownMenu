export default function test2() {
  const privateVariable = 'test2var';
  function myfunction() {
    return console.log(privateVariable);
  }
  return { myfunction };
}

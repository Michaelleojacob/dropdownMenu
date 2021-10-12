export default function test3() {
  const lol = 'test3var';
  function func() {
    return console.log(lol);
  }
  return { func };
}

async function test(){
  const color = await Promise.resolve("res");
  const name = await Promise.resolve("yura");
  return JSON.stringify({color});
}
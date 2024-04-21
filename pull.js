async function test(){
  const color = await Promise.resolve("res");
  return JSON.stringify({color});
}
export async function Test() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return <h1>Hello World</h1>
}

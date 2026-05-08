const decoder = new TextDecoder();

const response = await fetch('http://localhost:4000/')

for await (const chunk of response.body){
  console.log(decoder.decode(chunk))
}
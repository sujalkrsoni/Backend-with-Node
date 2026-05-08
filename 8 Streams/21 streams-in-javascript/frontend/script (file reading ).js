
const input = document.querySelector("input");

input.addEventListener("change", async () => {
  const file = input.files[0];
  console.log(file); // file details , not data inside file 

  //! reading file using file methods 
  // let text = await file.text();
  // console.log(text)


  // ! reading file using stream (broswer stream, not powerful like nodejs stream)
  // const readStream = file.stream()
  // const reader = readStream.getReader(); 

  // const decoder = new TextDecoder(); // we've to decode uint8 value into string , file doesn't provide toString method !
  // while(true){
  //   const {done, value} = await reader.read() // if file is big then in 1 time it doesn't read, it will read in 3 or 4 times 
  //   let result = decoder.decode(value)
  //   if(done) break; // if done value true then break 
  //   console.log(result)

  // }

  //! other method to reading using stream 
  const readStream = file.stream()
  for await (const chunk of readStream){
    console.log(chunk.toString())
  }
});

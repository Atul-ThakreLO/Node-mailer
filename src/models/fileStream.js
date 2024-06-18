import fs, { ReadStream } from "fs";

let htmlFile;
let fullContent;
async function readFile() {
  const readStream = fs.createReadStream(
    "../NodeMailer/public/index.html",
    "utf-8"
  );

  readStream.on("data", (chunk) => {
    // htmlFile.push(chunk);
  })

  readStream.on("end", (chunk) => {
    console.log("File readStream is successful");
    htmlFile = chunk;
  });

  readStream.on("error", (error) => {
    console.log(error);
  });
}

readFile().then((htmlFile) => {  
console.log(htmlFile);
});
export default htmlFile
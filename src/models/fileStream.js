import { error } from "console";
import fs, { ReadStream } from "fs";

const readStream = fs.createReadStream(
  "../NodeMailer/public/index.html",
  "utf-8"
);

let htmlFile;

readStream.on("data", (chunk) => {
  htmlFile = chunk;
});

readStream.on("end", () => {
  console.log("File readStream is successful");
});

readStream.on("error", (error) => {
  console.log(error);
});

export default htmlFile;
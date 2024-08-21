const { Readable } = require("stream");

class CustomReadableStream extends Readable {
  constructor(options) {
    super(options);
    this.maxNumber = 10;
    this.generatedNumbers = 0;
  }

  _read() {
    if (this.generatedNumbers >= this.maxNumber) {
      this.push(null);
    } else {
      const randomNumber = Math.floor(Math.random() * 1000);
      const buffer = Buffer.from(randomNumber.toString(), "utf8");
      this.push(buffer);
      this.generatedNumbers += 1;
    }
  }
}

const randomNumberStream = new CustomReadableStream();

randomNumberStream.on("data", (chunk) => {
  console.log("Received : ", chunk.toString());
});

randomNumberStream.on("end", () => {
  console.log("Finished reading the numbers");
});

const { Duplex } = require("stream");
const zlib = require("zlib");

class CustomDuplex extends Duplex {
  constructor() {
    super();
  }

  _read() {}

  _write() {}

  _final() {}
}

const duplexStream = new CustomDuplex();
console.log(duplexStream);

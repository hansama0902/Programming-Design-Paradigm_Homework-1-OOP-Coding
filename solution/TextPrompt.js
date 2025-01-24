
export default class TextPrompt  {
  constructor({ id = 1234, input = "Please translate Eng-to-French: 'Hello, world!'", output = "Bonjour, le monde!" } = {}) {

    if (!id || typeof id !== "number") {
      throw new Error("TextPrompt ID must be a valid number.");
    }
    if (!input || typeof input !== "string") {
      throw new Error("TextPrompt input must not be empty and must be a string.");
    }
    if (!output || typeof output !== "string") {
      throw new Error("TextPrompt output must not be empty and must be a string.");
    }

    this._id = id; 
    this._input = input; 
    this._output = output; 
    this._model = "Claude"; 
    this._version = "Sonnet 3.5"; 
    this._result = "Success"; 
    this._type = "Text-to-Text"; 
    this._date = new Date(); 
  }

  // Getter for id
  get id() {
    return this._id;
  }

  // Getter for model
  get model() {
    return this._model;
  }

  // Getter for version
  get version() {
    return this._version;
  }

  // Getter for result
  get result() {
    return this._result;
  }

  // Getter for type
  get type() {
    return this._type;
  }

  // Getter for input
  get input() {
    return this._input;
  }

  // Getter for output
  get output() {
    return this._output;
  }

  // Getter for date
  get date() {
    return this._date;
  }

  // toString method
  toString() {
    return `⭐️ Prompt ${this.id} (${this.date}) ${this.model} ${this.version} - ${this.result}\n` +
           `    Input: ${this.input}\n` +
           `    Output: ${this.output}`;
  }
}


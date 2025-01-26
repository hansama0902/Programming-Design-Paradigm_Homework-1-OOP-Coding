import PromptInterface from "./PromptInterface.js";
export default class TextPrompt extends PromptInterface {
  constructor({
    id = 1234,
    input = "Please translate Eng-to-French: 'Hello, world!'",
    output = "Bonjour, le monde!",
    model = "Claude",
    version = "Sonnet 3.5",
    result = "Success",
    type = "Text-to-Text",
    date = new Date(),
  } = {}) {
    if (!id || typeof id !== "number") {
      throw new Error("TextPrompt ID must be a valid number.");
    }
    if (!input || typeof input !== "string" || input.trim() === "") {
      throw new Error(
        "TextPrompt input must not be empty and must be a string.",
      );
    }
    if (!output || typeof output !== "string" || output.trim() === "") {
      throw new Error(
        "TextPrompt output must not be empty and must be a string.",
      );
    }
    if (typeof model !== "string" || model.trim() === "") {
      throw new Error("Model must be a non-empty string.");
    }
    if (typeof version !== "string" || version.trim() === "") {
      throw new Error("Version must be a non-empty string.");
    }
    if (typeof result !== "string" || result.trim() === "") {
      throw new Error("Result must be a non-empty string.");
    }
    if (typeof type !== "string" || type.trim() === "") {
      throw new Error("Type must be a non-empty string.");
    }
    if (!(date instanceof Date)) {
      throw new Error("Date must be a valid Date object.");
    }
    super();
    this._id = id;
    this._input = input;
    this._output = output;
    this._model = model;
    this._version = version;
    this._result = result;
    this._type = type;
    this._date = date;
  }

  get id() {
    return this._id;
  }

  get model() {
    return this._model;
  }

  get version() {
    return this._version;
  }

  get result() {
    return this._result;
  }

  get type() {
    return this._type;
  }

  get input() {
    return this._input;
  }

  get output() {
    return this._output;
  }

  get date() {
    return this._date;
  }

  toString() {
    return (
      `⭐️ Prompt ${this.id} (${this.date}) ${this.model} ${this.version} - ${this.result}\n` +
      `    Input: ${this.input}\n` +
      `    Output: ${this.output}`
    );
  }
}

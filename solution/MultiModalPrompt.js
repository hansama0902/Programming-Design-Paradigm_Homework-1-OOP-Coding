import Attachment from "../solution/Attachment.js";

export default class MultiModalPrompt {
  constructor({ inputAttachment, outputAttachment } = {}) {
    if (!(inputAttachment instanceof Attachment)) {
      throw new Error("inputAttachment must be an instance of Attachment.");
    }
    if (!(outputAttachment instanceof Attachment)) {
      throw new Error("outputAttachment must be an instance of Attachment.");
    }

    // Initialize the attachements array with a spelling error to match the test case
    this._attachements = [inputAttachment, outputAttachment];
  }

  // Getter for attachements (matches the spelling in the test case)
  get attachements() {
    return this._attachements;
  }

  // toString method
  toString() {
    return `InputAttachment: ${this._attachements[0].toString()}\n` +
           `OutputAttachment: ${this._attachements[1].toString()}`;
  }
}




  
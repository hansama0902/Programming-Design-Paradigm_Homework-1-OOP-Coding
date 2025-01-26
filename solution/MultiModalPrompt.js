import TextPrompt from "./TextPrompt.js";
import Attachment from "./Attachment.js";

export default class MultiModalPrompt extends TextPrompt {
  constructor({
    id = 1234,
    input = "Default input",
    output = "Default output",
    model = "DefaultModel",
    version = "DefaultVersion",
    result = "DefaultResult",
    type = "MultiModal",
    date = new Date(),
    inputAttachment = null,
    outputAttachment = null,
  } = {}) {
    super({ id, input, output, model, version, result, type, date });

    if (inputAttachment && !(inputAttachment instanceof Attachment)) {
      throw new Error("inputAttachment must be an instance of Attachment.");
    }

    if (outputAttachment && !(outputAttachment instanceof Attachment)) {
      throw new Error("outputAttachment must be an instance of Attachment.");
    }

    this._attachments = [inputAttachment, outputAttachment];
  }

  get attachments() {
    return this._attachments;
  }

  toString() {
    let attachmentInfo = "";

    for (let index = 0; index < this._attachments.length; index++) {
      const attachment = this._attachments[index];

      if (attachment) {
        attachmentInfo += `Attachment ${index + 1}: ${attachment.toString()}\n`;
      } else {
        attachmentInfo += `Attachment ${index + 1}: None\n`;
      }
    }

    attachmentInfo = attachmentInfo.trim();

    return `${super.toString()}\n${attachmentInfo}`;
  }
}

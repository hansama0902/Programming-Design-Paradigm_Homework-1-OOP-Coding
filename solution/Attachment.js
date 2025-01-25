export default class Attachment {
  constructor({ type, payload }) {
    if (!type || typeof type !== "string") {
      throw new Error("Attachment type must not be empty and must be a string.");
    }
    if (!payload || typeof payload !== "string") {
      throw new Error("Attachment payload must not be empty and must be a string.");
    }
    this.type = type;
    this.payload = payload;
  }

  toString() {
    return `Attachment: Type=${this.type}, Payload=${this.payload}`;
  }
}

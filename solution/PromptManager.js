export default class PromptManager {
  constructor() {
    this.prompts = []; 
  }
  
  addPrompt(prompt) {
    if (!prompt || typeof prompt.toString !== "function") {
      throw new Error("Invalid prompt object. It must have a toString method.");
    }
    this.prompts.push(prompt);
  }
  

  [Symbol.iterator]() {
    return this.prompts[Symbol.iterator]();
  }
  
  filterPrompts(filterCallback) {
    if (typeof filterCallback !== "function") {
      throw new Error("filterCallback must be a function.");
    }
    return this.prompts.filter(filterCallback);
  }
}
  
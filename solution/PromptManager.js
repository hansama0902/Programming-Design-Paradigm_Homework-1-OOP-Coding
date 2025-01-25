// import TextPrompt from "./TextPrompt.js";

export default class PromptManager {
  prompts = []; 
  
  addPrompt(promptOpt) {
    this.prompts.push(promptOpt);
  }

  searchPrompt(keyword) {
    const result = [];
    for (const prompt of this.prompts) {
      if(prompt.match(keyword)) {
        result.push(prompt);
      }
    }
    return result;
  }
  deletePrompt(index) {
    if (index < 0 || index >= this.prompts.length) {
      throw new Error("Index out of bounds.");
    }
    this.prompts.splice(index, 1); 
  }
  listPrompts() {
    return [...this.prompts];
  }
  [Symbol.iterator]() {
    let index = 0;
    const prompts = this.prompts;

    return {
      next(){
        if (index < prompts.length) {
          return { value: prompts [index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
  filterPrompts(filterCallback) {
    if (typeof filterCallback !== "function") {
      throw new Error("filterCallback must be a function.");
    }
    return this.prompts.filter(filterCallback);
  }
}
  
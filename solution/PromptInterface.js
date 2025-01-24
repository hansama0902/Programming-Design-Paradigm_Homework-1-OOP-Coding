export default class PromptInterface {

  get id() {
    throw new Error("Not implemented. e.g. 1234");
  }
    
  get model() {
    throw new Error("Not implemented. e.g. Claude");
  }
    

  get version() {
    throw new Error("Not implemented: e.g. Sonnet 3.5");
  }

  get result() {
    throw new Error("Not implemented. e.g. \"Success\"");
  }
    

  get type() {
    throw new Error("Not implemented: e.g. Text-to-Text");
  }
  get input() {
    throw new Error("Not implemented. e.g. Translate this text");
  }
    

  get output() {
    throw new Error("Not implemented. e.g. Translated text");
  }
    
 
  get date() {
    throw new Error("Not implemented. e.g. 2025/01/17 2:28PM");
  }
    

  toString() {
    throw new Error("Not implemented. e.g. \"2025/01/17 2:28PM - Success\"");
  }
}
  
  
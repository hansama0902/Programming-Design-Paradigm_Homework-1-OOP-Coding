import PromptManager from "../solution/PromptManager.js";

describe("PromptManager", () => {
  let manager;

  beforeEach(() => {
    manager = new PromptManager();
  });

  test("should add a prompt to the manager", () => {
    manager.addPrompt("Translate this text into French: 'Hello'");
    expect(manager.listPrompts()).toContain("Translate this text into French: 'Hello'");
  });

  test("should delete a prompt by index", () => {
    manager.addPrompt("Prompt 1");
    manager.addPrompt("Prompt 2");
    manager.deletePrompt(0);
    expect(manager.listPrompts()).toEqual(["Prompt 2"]);
  });

  test("should throw an error when deleting with an invalid index", () => {
    manager.addPrompt("Prompt 1");
    expect(() => manager.deletePrompt(1)).toThrow("Index out of bounds.");
  });

  test("should list all prompts", () => {
    manager.addPrompt("Prompt 1");
    manager.addPrompt("Prompt 2");
    expect(manager.listPrompts()).toEqual(["Prompt 1", "Prompt 2"]);
  });

  test("should search prompts by keyword", () => {
    manager.addPrompt("Translate this text into French: 'Hello'");
    manager.addPrompt("What is the capital of France?");
    const result = manager.searchPrompt("French");
    expect(result).toEqual(["Translate this text into French: 'Hello'"]);
  });

  test("should return an empty array if no prompts match the keyword", () => {
    manager.addPrompt("Translate this text into French: 'Hello'");
    const result = manager.searchPrompt("Spanish");
    expect(result).toEqual([]);
  });
});

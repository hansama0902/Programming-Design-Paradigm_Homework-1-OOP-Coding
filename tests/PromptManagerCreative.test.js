import PromptManager from "../solution/PromptManager.js";

describe("PromptManager", () => {
  let manager;

  beforeEach(() => {
    manager = new PromptManager();
    manager.addPrompt("Prompt 1");
    manager.addPrompt("Prompt 2");
    manager.addPrompt("Prompt 3");
    manager.addPrompt("Prompt 4");
  });

  test("deletePrompts should remove prompts at specified indices", () => {
    manager.deletePrompts([1, 3]);
    expect(manager.listPrompts()).toEqual(["Prompt 1", "Prompt 3"]);
  });

  test("deletePrompts should throw error for invalid indices", () => {
    expect(() => manager.deletePrompts([5])).toThrow(
      "Index 5 is out of bounds.",
    );
    expect(() => manager.deletePrompts([-1])).toThrow(
      "Index -1 is out of bounds.",
    );
  });

  test("deletePrompts should handle empty index list", () => {
    manager.deletePrompts([]); //
    expect(manager.listPrompts()).toEqual([
      "Prompt 1",
      "Prompt 2",
      "Prompt 3",
      "Prompt 4",
    ]);
  });

  test("deletePrompts should throw error if indices is not an array", () => {
    expect(() => manager.deletePrompts("invalid")).toThrow(
      "Indices must be an array.",
    );
  });
});

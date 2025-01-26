# Programming-Design-Paradigm_Homework-1-OOP-Coding  

## Project Description
This project is a Node.js application developed for **Programming Design Paradigm Homework 1**, focusing on Object-Oriented Programming (OOP). The system is designed to handle various types of prompts, including text and multimodal prompts, and incorporates features such as managing prompts and attachments. It serves as a demonstration of key OOP principles such as abstraction, inheritance, encapsulation, and polymorphism.

## Author

**Shuhan Dong**


### Steps to Run the Project Locally


**1. Clone the repository**
```bash
git clone <repository-url>
cd Programming-Design-Paradigm_Homework-1-OOP-Coding
```
**2. Install dependencies**
```bash
npm install
```
**3. Run the project**
```bash
npm start
```
**4. Run tests**
```bash
npm test
```
### Creative addition
**Deleting multiple prompts from the prompts collection based on an array of indices.**
```bash
deletePrompts(indices) {
    if (!Array.isArray(indices)) {
      throw new Error("Indices must be an array.");
    }
    for (const index of indices) {
      if (index < 0 || index >= this.prompts.length) {
        throw new Error(`Index ${index} is out of bounds.`);
      }
    }
    indices.sort((a, b) => b - a);
    for (const index of indices) {
      this.deletePrompt(index);
    }
  }
```
## Usage of GenAI

### Problem
I implemented the following `addPrompt` method:

```javascript
addPrompt(promptOpt) {
    this.prompts.push(new TextPrompt(promptOpt));
}
```

However, when running the tests, an **additional empty array (`[]`)** is appearing in the results.  

ChatGPT 4 recommended modifying the test file to replace:

```javascript
expect(manager.prompts).toContain(prompt);
```

with:

```javascript
expect(manager.prompts).toContainEqual(prompt);
```

This approach uses `.toContainEqual` to compare objects based on their values instead of references, which would solve the issue.

---

### Reason for Not Adopting
Since the suggestion involves **modifying the test file**, I decided not to adopt this approach.  

## License

This project is licensed under the **MIT License**.

const dialogue = {
    start: {
        text: "Hi! Today we'll learn about logic. What would you like to do?",
        options: [
            { text: "Learn about conditional sentences", next: "conditionalSentences" },
            { text: "Learn about classical logic", next: "classicalLogic" }
        ]
    },
    conditionalSentences: {
        text: "Conditional sentences take the form 'if A, then B'. Would you like to see an example?",
        options: [
            { text: "Yes", next: "example" },
            { text: "No, go back to the main menu", next: "start" }
        ]
    },
    classicalLogic: {
        text: "Classical logic is based on the principle of non-contradiction. Would you like to know more?",
        options: [
            { text: "Yes", next: "moreInfo" },
            { text: "No, go back to the main menu", next: "start" }
        ]
    },
    example: {
        text: "Example: If it rains, then the road is wet.",
        options: [{ text: "Going back to the main menu", next: "start" }]
    },
    moreInfo: {
        text: "Classical logic consists of principles that define the truth of statements.",
        options: [{ text: "Going back to the main menu", next: "start" }]
    }
};

const dialogueContainer = document.getElementById('dialogue-container');
const dialogueText = document.getElementById('dialogue-text');
const optionsContainer = document.getElementById('options-container');

function startDialogue(node) {
    dialogueText.textContent = dialogue[node].text;
    optionsContainer.innerHTML = '';

    dialogue[node].options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.addEventListener('click', () => {
            startDialogue(option.next);
        });
        optionsContainer.appendChild(button);
    });
}

startDialogue('start');

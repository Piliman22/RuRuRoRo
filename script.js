document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generateButton');
    generateButton.addEventListener('click', generateRandomCharacters);
});

function generateRandomCharacters() {
    const characters = ['ル', 'ロ'];
    let result = '';
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    addResultToContainer(result);
}

function addResultToContainer(result) {
    const resultContainer = document.getElementById('resultContainer');
    const resultElement = document.createElement('div');
    resultElement.className = 'result';
    resultElement.textContent = result;
    resultContainer.appendChild(resultElement);
}

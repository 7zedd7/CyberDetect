// script.js
document.getElementById('classification-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var inputText = document.getElementById('text').value;
    var cleanedInput = cleanText(inputText);
    var prediction = classifyText(cleanedInput);

    var resultElement = document.getElementById('prediction-result');
    resultElement.textContent = prediction;
    resultElement.style.display = 'block';
});

function cleanText(text) {
    text = text.toLowerCase();
    text = text.replace(/[.?]/g, '');
    text = text.replace(/https?:\/\/\S+|www\.\S+/g, '');
    text = text.replace(/<.*?>/g, '');
    text = text.replace(/[^\w\s]/g, '');
    text = text.replace(/\n/g, '');
    text = text.replace(/\w\d\w/g, '');
    return text;
}

function classifyText(text) {
    var prediction = Math.round(Math.random());
    
    if (prediction === 1) {
        return "The text is classified as cyberbullying.";
    } else {
        return "The text is not classified as cyberbullying.";
    }
}

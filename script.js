function speak(category) {
    const speech = new SpeechSynthesisUtterance(category);
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
}

// click event listeners 
document.addEventListener('DOMContentLoaded', function() {
    const imageCategories = document.querySelectorAll('.col');
    imageCategories.forEach(function(category) {
        category.addEventListener('click', function() {
            const categoryName = this.querySelector('h4').textContent;
            speak(categoryName);
        });
    });
});


// Click on Custom Text Button to open the Custom Model
document.addEventListener('DOMContentLoaded', function() {
    const readText = document.getElementById('ReadcustomText');
    readText.addEventListener('click', function() {
        const modal = new bootstrap.Modal(document.getElementById('textInputModal'));
        modal.show();
    });
});


// click on read button to speeak the text
document.getElementById('ReadText').addEventListener('click', function() {
    const voiceSelect = document.getElementById('voiceSelect');
    const selectedVoice = voiceSelect.options[voiceSelect.selectedIndex].value;
    const messageText = document.getElementById('message-text').value;

    if (messageText.trim() !== '') {
        speak(messageText, selectedVoice);
    }
});



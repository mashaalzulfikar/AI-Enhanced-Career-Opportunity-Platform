// Function for Project Listing Generator
document.getElementById('generate-project-desc').addEventListener('click', function() {
    const industry = document.getElementById('proj-industry').value;
    const goals = document.getElementById('proj-goals').value;
    const skills = document.getElementById('proj-skills').value;
    
    if (industry && goals && skills) {
        document.getElementById('project-desc-output').innerText = 
            "AI-Generated Listing for " + industry + ": This project focuses on " + goals + ". Key skills: " + skills + ".";
    } else {
        alert("Please fill in all fields!");
    }
});

// Function for Opportunity Matcher
document.getElementById('find-opportunities').addEventListener('click', function() {
    const skills = document.getElementById('seeker-skills').value;
    document.getElementById('opportunities-output').innerText = 
        "Matching opportunities for " + skills + ": 1. Backend Engineer, 2. AI Researcher.";
});

// Function for Chatbot
document.getElementById('chat-send').addEventListener('click', function() {
    const msg = document.getElementById('chat-input').value;
    const chatBox = document.getElementById('chat-messages');
    
    if (msg) {
        chatBox.innerHTML += "<p><b>You:</b> " + msg + "</p>";
        chatBox.innerHTML += "<p><b>Bot:</b> I'm processing your request regarding '" + msg + "'...</p>";
        document.getElementById('chat-input').value = "";
    }
});

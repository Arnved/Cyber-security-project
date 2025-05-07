'use strict';
console.log("Script loaded");

// Typewriter Effect Function 
function typeWriterEffect(element, text, speed) {
    let i = 0;
    element.innerHTML = ""; // clears the text that was there before

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Save the Name & Start Quiz
function saveName() {
    let name = document.getElementById("nameInput").value.trim();

    if (name) {
        localStorage.setItem("username", name);

        let usernameElement = document.getElementById("username");
        usernameElement.setAttribute("data-text", `Hello, ${name}! May the odds be ever in your favor`);
        usernameElement.classList.add("typewriter-text");
        typeWriterEffect(usernameElement, usernameElement.getAttribute("data-text"), 50);

        document.getElementById("nameInput").style.display = "none";
        document.querySelector("button").style.display = "none";

        setTimeout(() => displayQuestion(0), 3000);
    }
}

// store name after page refresh
document.addEventListener("DOMContentLoaded", function() {
    let storedName = localStorage.getItem("username");
    if (storedName) {
        let usernameElement = document.getElementById("username");
        usernameElement.setAttribute("data-text", `Hello, ${storedName}!`);
        usernameElement.classList.add("typewriter-text");
        typeWriterEffect(usernameElement, usernameElement.getAttribute("data-text"), 50);
    }
});

// quizzen
const quizData = [
    {
        question: "How important do you think it is to protect your online information?",
        answers: [
            { text: "Very, I care about it", next: 1 },
            { text: "Meh", next: 2 },
            { text: "I really can't be bothered", next: 3 }
        ]
    },
   // nr. 1 *
    {
        question: "Thats great! It is very important to protect yourself and your data. What security method do you use?",
        answers: [
            { text: "Strong passwords, nobody will guess it!", next: 4 },
            { text: "Antivirus is enough for me", next: 5 },
            { text: "I use both antivirus and strong passwords, im awesome", next: 6 }
        ]
    },
    //nr.2 *
    {
        question: "You might not think you have information important to protect. But with enough acces to your data, the mean cyber bullies can use it to get to your loved ones too. So you dont just risk your own safety.",
        answers: [
            { text: "fine.. I will do something about it.. but what?", next: 9 },
            { text: "Cant they just protect themselves, why do i have to do it?", next: 12 }
        ]
    },
    //nr.3
    {
        question: "You might want to rethink that buddy.. You probably dont want someone to hack your social media and text your ex that you still love them.",
        answers: [
            { text: "What if I dont have an ex? huh? what then? you dont scare me!", next: 10 },
            { text: "Okay fine, you got me there.. Please dont text them! what do i do now?", next: 9 }
        ]
    },
    //nr.4
    {
        question: "You might think that, but did you know that many phishing attacks make it look like you can trust them, using names of sites you already trust. Do you feel like you know how to protect yourself and your data?",
        answers: [
            { text: "Yes, i know exactly how to protect myself!", next: 7 },
            { text: "Well, okay maybe I dont really know how to do it..", next: 8 }
        ]
    },
    //nr.5
    {
        question: "Antivirus is pretty cool bro. But it doesnt protect you from all kinds of malware and phishing, you can always do more!",
        answers: [
            { text: "But i really dont want to tho. ", next: 3 },
            { text: "Well what do you suggest then?", next: 9 }
        ]
    },
    //nr.6
    {
        question: "You are pretty awesome! All kinds of protection is good for you, and you can never be too protected. Do you want some information about how to protect yourself and what you can do to be even more awesome!?",
        answers: [
            { text: "Nah man im good. Im pretty good at this stuff.", next: 13 },
            { text: "Yeah, give it to me!", next: 11 }
        ]
    },
    //nr.7 *
    {
        question: "Damn, im proud of you then! keep up the exellent work and beware of people trying to take advantage of you. ",
        answers: [{ text: "Im proud of me too. Thanks", next: 13 }
        ]
    },
    //nr.8 *
    {
        question: "Thats alright, i'll give you some quick tricks. When dealing with phishing, you have to remember that they will gather information about you as a person and then use it against you. So be aware about what information about you that can be found online. Maybe try to google yourself to test just how much information is available about you for others - and then avoid using any of that information as your passwords. ",
        answers: [{ text: "I will do that right away! (or maybe forget..)", next: 13 }
        ]
    },
     //nr.9 *
     {
        question: "There are many options for protecting yourself online. Some of the easiest ones are to create strong passwords with no personal information used in them. Another is to make sure you use an antivirus program for your devices. And then remember; if you dont know who sent you something, dont open it! I hope this was helpful and will get you started on your cyber security journey ",
        answers: [
            { text: "Yes this will be enough for now.", next: 13 },
            { text: "Can you tell me a little bit more?", next: 8 }
        ]
    },
     //nr.10 *
     {
        question: "Someone is brave. I cant really help with the relationship part man, but hey, people like people that care about stuff, so this is as good as anything I guess.",
        answers: [
            { text: "Brah, i just dont care, and im done with your questions now.", next: 13 },
            { text: "You really dont quit do you? fine then. Tell me something", next: 9 }
        ]
    },
    //nr.11 *
    {
        question: "Cool, here it comes. Be aware of what information you put out online, dont use sites that you dont trust, or doesnt have a https tag at the start. Dont give out sensitive information online unless you are completely sure of the site. and never NEVER send money to the prince on the deserted island, even if he promises you the doubble amount later.",
        answers: [
            { text: "Man.. I was planning on sending that money tho. I guess he will just stay stuck on the island now.", next: 13 },
            { text: "I need more information!", next: 8 }
        ]
    },
     //nr.12 *
     {
        question: "Pretty harsh man. They can. But if you just let everyone acess your information, and they have trust in you, then the cyber bullis can also get to your loved ones. If you really dont care, then you should tell them, so that they can be careful about what they share with you.",
        answers: [
            { text: "Okay okay I get it! give me some information then. If you really must.", next: 11 },
            { text: "Still dont care tho.", next: 13 }
        ]
    },
    //nr.13*
    {
        question: "Thank you for your attention! Remember to spread the knowledge to your cyber challenged friends.",
        answers: [
            { text: "<3 <3 <3 <3", next: null }
        ]
    }
];

// shows questions dynamically
function displayQuestion(index) {
    let questionContainer = document.getElementById("question");
    let buttonContainer = document.getElementById("button-options");

    if (index === null) return;

    let currentQuestion = quizData[index];
    questionContainer.setAttribute("data-text", currentQuestion.question);
    questionContainer.classList.add("typewriter-text");
    typeWriterEffect(questionContainer, questionContainer.getAttribute("data-text"), 50);

    buttonContainer.innerHTML = "";
    currentQuestion.answers.forEach(answer => {
        let btn = document.createElement("button");
        btn.innerText = answer.text;
        btn.classList.add("answer-btn");
        btn.onclick = () => handleAnswerSelection(answer.text, index);
        buttonContainer.appendChild(btn);
    });
}
function handleAnswerSelection(answer, questionIndex) {
    let responses = JSON.parse(localStorage.getItem("quizResponses")) || [];
    responses.push({ question: quizData[questionIndex].question, answer: answer });
    localStorage.setItem("quizResponses", JSON.stringify(responses));

    console.log("Stored Responses:", responses); // Debugging
    displayQuestion(quizData[questionIndex].answers.find(a => a.text === answer).next);
}

function showResults() {
    let responses = JSON.parse(localStorage.getItem("quizResponses")) || [];
    let resultContainer = document.getElementById("results");

    // Debugging 
    console.log("Retrieved Responses:", responses);

    if (responses.length === 0) {
        resultContainer.innerHTML = "<p>Dont be impatient, answer some questions first.</p>";
        return;

    }

    resultContainer.innerHTML = "<h2>Your Answers:</h2>";
    responses.forEach((entry, index) => {
        resultContainer.innerHTML += `<p>${index + 1}. <strong>${entry.question}</strong>: ${entry.answer}</p>`;
    });

}

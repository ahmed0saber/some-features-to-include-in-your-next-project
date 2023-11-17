const textToSpeechBtn = document.querySelector(".text-to-speech-btn")
const messageToBeSpoken = document.querySelector(".message-to-be-spoken")
let isSpeaking = false

textToSpeechBtn.addEventListener("click", () => {
    if (isSpeaking) {
        return
    }

    if ("speechSynthesis" in window) {
        const speechMsg = new SpeechSynthesisUtterance()
        speechMsg.text = messageToBeSpoken.textContent

        speechMsg.onend = () => {
            textToSpeechBtn.classList.remove("is-speaking")
            isSpeaking = false
        }

        speechMsg.onerror = () => {
            textToSpeechBtn.classList.remove("is-speaking")
            isSpeaking = false
        }

        textToSpeechBtn.classList.add("is-speaking")
        isSpeaking = true
        speechSynthesis.speak(speechMsg)
    } else {
        alert("Sorry, your browser doesn't support text to speech!")
    }
})

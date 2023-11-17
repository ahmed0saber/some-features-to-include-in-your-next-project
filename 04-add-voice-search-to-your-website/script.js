const voiceSearchBtn = document.querySelector(".voice-search-btn")
const searchInput = document.querySelector(".search-input")
let isRecording = false

searchInput.addEventListener("input", async () => {
    const res = await fetch(`https://dummyjson.com/products/search?q=${searchInput.value}`)
    const data = await res.json()

    console.log(data)
})

voiceSearchBtn.addEventListener("click", () => {
    if (isRecording) {
        return
    }
    isRecording = true

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const speechRecognition = new SpeechRecognition()
    let isValidResult = false
    // speechRecognition.lang = "ar-SA"

    speechRecognition.onresult = (event) => {
        const inputEvent = new KeyboardEvent('input')
        const currentResult = event.resultIndex
        const transcript = event.results[currentResult][0].transcript
        searchInput.focus()
        searchInput.value = transcript
        searchInput.dispatchEvent(inputEvent)
        voiceSearchBtn.classList.remove("is-recording")
        isValidResult = true
        isRecording = false
    }

    speechRecognition.onerror = () => {
        voiceSearchBtn.classList.remove("is-recording")
        console.error("An error has occured")
        isRecording = false
    }

    speechRecognition.onend = () => {
        if (!isValidResult) {
            voiceSearchBtn.classList.remove("is-recording")
            isRecording = false
            console.error("Time out, please try again")
        }
    }

    voiceSearchBtn.classList.add("is-recording")
    speechRecognition.start()
})

const toggleModeBtn = document.querySelector(".toggle-mode-btn")
const documentBody = document.body

toggleModeBtn.addEventListener("click", () => {
    documentBody.classList.toggle("dark-mode")

    if (documentBody.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", true)
    } else {
        localStorage.removeItem("dark-mode")
    }
})

const displayCurrentMode = () => {
    const currentMode = localStorage.getItem("dark-mode")
    if (currentMode) {
        documentBody.classList.add("dark-mode")
    }
}
displayCurrentMode()

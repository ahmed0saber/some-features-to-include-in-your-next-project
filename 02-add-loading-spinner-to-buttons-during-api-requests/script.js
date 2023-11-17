const getUsersBtn = document.querySelector(".get-users-btn")

const getUsers = async () => {
    const res = await fetch("https://reqres.in/api/users?delay=3")
    const data = await res.json()

    return data
}

getUsersBtn.addEventListener("click", async () => {
    getUsersBtn.classList.add("is-btn-loading")
    const users = await getUsers()
    getUsersBtn.classList.remove("is-btn-loading")

    console.log(users)
})
